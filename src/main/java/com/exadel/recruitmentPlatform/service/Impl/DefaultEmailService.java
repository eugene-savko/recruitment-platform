package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.service.EmailService;
import com.exadel.recruitmentPlatform.service.InternshipService;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class DefaultEmailService implements EmailService {

    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private Configuration configuration;
    @Autowired
    private InternshipService internshipService;
    @Autowired
    private SpecialityService specialityService;

    @Value("${spring.mail.enabled}")
    private boolean emailEnabled;

    private final String exadelEmailAddress = "Exadel.Internship@gmail.com";
    private final String subject = "Internship in Exadel";

    @Override
    public void sendMessage(String to, InternshipRequestDto dto) {
        if (!emailEnabled) {
            log.warn("Email sending feature disabled.");
            return;
        }
        SimpleMailMessage message = new SimpleMailMessage();
        String subject = "Internship in Exadel";
        String text = "Hello, " + dto.getUserDto().getFirstName() + " " + dto.getUserDto().getLastName() + "!" + '\n' +
                "You have sent an application for a " + internshipService.get(dto.getInternshipId()).getName() + " course." + '\n'
                + "Main speciality name - " + specialityService.getSpecialityById(dto.getSpecialityId()).getName() + "." + '\n' +
                "Thank you for your interest, your application will be reviewed soon.";
        message.setFrom("Exadel.internship@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }

    @Override
    public void sendEmail(String emailTo, Map<String, Object> model, String templateName) {
        if (!emailEnabled) {
            log.warn("Email sending feature disabled.");
            return;
        }
        MimeMessage message = emailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            Template template = configuration.getTemplate(templateName);
            String htmlBody = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);
            helper.setFrom(exadelEmailAddress);
            helper.setTo(emailTo);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);
        } catch (MessagingException | IOException | TemplateException e) {
            throw new RuntimeException("Failed to send email message!");
        }
        emailSender.send(message);
    }

    @Override
    public Map<String, Object> placeholder(InternshipRequestDto dto) {
        Map<String, Object> model = new HashMap<>();
        model.put("FirstName", dto.getUserDto().getFirstName());
        model.put("LastName", dto.getUserDto().getLastName());
        model.put("Speciality", specialityService.getSpecialityById(dto.getSpecialityId()).getName());
        model.put("Internship", internshipService.get(dto.getInternshipId()).getName());

        return model;
    }

    @Override
    public Map<String, Object> placeholderAssignmentInterview(InternshipRequest internshipRequest, LocalDateTime dateTime, UserRole userRole) {
        Map<String, Object> model = new HashMap<>();
        model.put("FirstName", internshipRequest.getUser().getFirstName());
        model.put("LastName", internshipRequest.getUser().getLastName());
        model.put("Speciality", specialityService.getSpecialityById(internshipRequest.getSpecialityId()).getName());
        model.put("Internship", internshipService.get(internshipRequest.getInternshipId()).getName());
        model.put("Role", userRole.getMessageKey());
        model.put("Date", dateTime.format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm")));

        return model;
    }

}