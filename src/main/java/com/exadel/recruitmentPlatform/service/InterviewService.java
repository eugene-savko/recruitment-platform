package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.EnglishLevelDto;
import com.exadel.recruitmentPlatform.dto.InterviewDto;
import com.exadel.recruitmentPlatform.dto.InterviewResponseDto;

import java.util.List;

public interface InterviewService {
    InterviewDto updateFeedback(Long id, String feedback , String englishLevel);
    List<InterviewResponseDto> getInterviews(Long userId, Long internshipId);
    InterviewDto updateEnglishLevel(Long id,String englishLevel);

}
