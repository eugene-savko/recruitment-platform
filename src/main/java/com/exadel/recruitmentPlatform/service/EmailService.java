package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.entity.EmailType;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.UserRole;

import java.time.LocalDateTime;
import java.util.Map;

public interface EmailService {
    void sendMessage(String to, InternshipRequestDto dto);

    void sendEmail(String emailTo, Map<String, Object> model, EmailType emailType);

    Map<String, Object> placeholder(InternshipRequestDto dto);

    Map<String, Object> placeholderAssignmentInterview(InternshipRequest internshipRequest, LocalDateTime dateTime, UserRole userRole);

    Map<String, Object> placeholderAcceptedOrRejected(InternshipRequest internshipRequest);
}
