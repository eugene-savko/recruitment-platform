package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.dto.StatusDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestSearchDto;
import com.exadel.recruitmentPlatform.entity.EmailType;
import com.exadel.recruitmentPlatform.service.EmailService;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import com.exadel.recruitmentPlatform.service.InterviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.xml.bind.ValidationException;

@RestController
@AllArgsConstructor
@RequestMapping("/api/internship-request")
public class InternshipRequestController {

    private final InternshipRequestService internshipRequestService;
    private final EmailService emailService;
    private final InterviewService interviewService;

    @Secured({"ROLE_ADMIN"})
    @PutMapping("/update-status")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateStatus(@Valid @RequestBody StatusDto statusDto) throws ValidationException {
        internshipRequestService.updateStatus(statusDto);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<InternshipRequestDto> save(@Valid @RequestBody InternshipRequestDto internshipRequestDto) {
        InternshipRequestDto requestDto = internshipRequestService.save(internshipRequestDto);
        emailService.sendEmail(requestDto.getUserDto().getEmail(), emailService.placeholder(requestDto), EmailType.SENDING_APPLICATION_TEMPLATE);
        return ResponseEntity.ok(requestDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<InternshipRequestProfileDto> getInternshipRequestProfile(@PathVariable Long id) {
        return ResponseEntity.ok(internshipRequestService.getInternshipRequestProfile(id));
    }

    @PostMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public PageableResponseDto getInternshipRequests(@Valid @RequestBody InternshipRequestSearchDto internshipRequestSearchDto) {
        return internshipRequestService.getInternshipRequests(internshipRequestSearchDto);
    }
}

