package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.EnglishLevelDto;
import com.exadel.recruitmentPlatform.dto.FeedbackDto;
import com.exadel.recruitmentPlatform.dto.InterviewDto;
import com.exadel.recruitmentPlatform.service.Impl.InterviewServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/api/interview")
public class InterviewController {

    private final InterviewServiceImpl interviewService;

    @Secured({"ROLE_SPECIALIST", "ROLE_ADMIN"})
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<InterviewDto> save(@Valid @RequestBody FeedbackDto feedback) {
        return ResponseEntity.ok(interviewService.updateFeedback(feedback.getId(), feedback.getFeedback()));
    }

    @Secured({"ROLE_SPECIALIST", "ROLE_ADMIN"})
    @PutMapping(value = "/english-level")
    public ResponseEntity<InterviewDto> updateEnglishLevel(@RequestBody EnglishLevelDto englishLevelDto) {
        return ResponseEntity.ok(interviewService.updateEnglishLevel(englishLevelDto.getId(), englishLevelDto.getEnglishLevel()));
    }

}
