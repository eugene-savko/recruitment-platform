package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.service.EmailService;
import com.exadel.recruitmentPlatform.service.Impl.DefaultEmailService;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import com.exadel.recruitmentPlatform.service.InterviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/internship-request")
public class InternshipRequestController {

    private final InternshipRequestService internshipRequestService;
    private final EmailService emailService;
    private final InterviewService interviewService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<InternshipRequestDto> save(@Valid @RequestBody InternshipRequestDto internshipRequestDto) {
        InternshipRequestDto requestDto = internshipRequestService.save(internshipRequestDto);
        emailService.sendEmail(requestDto.getUserDto().getEmail(), emailService.placeholder(requestDto), DefaultEmailService.SENDING_APPLICATION_TEMPLATE);
        return ResponseEntity.ok(requestDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<InternshipRequestProfileDto> getInternshipRequestProfile(@PathVariable Long id) {
        return ResponseEntity.ok(internshipRequestService.getInternshipRequestProfile(id));
    }
}

