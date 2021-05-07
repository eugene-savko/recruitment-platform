package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InterviewDto;

public interface InterviewService {
    InterviewDto updateFeedback(Long id, String feedback);
}
