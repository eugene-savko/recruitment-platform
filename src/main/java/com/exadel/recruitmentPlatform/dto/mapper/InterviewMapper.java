package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InterviewDto;
import com.exadel.recruitmentPlatform.entity.Interview;
import org.springframework.stereotype.Component;

@Component
public class InterviewMapper implements BaseMapper<Interview, InterviewDto> {

    @Override
    public InterviewDto toDto(Interview interview) {
        InterviewDto interviewDto=new InterviewDto();
        interviewDto.setFeedback(interview.getFeedback());
        interviewDto.setFromUserId(interview.getFromUser().getId());
        interviewDto.setToUserId(interview.getToUser().getId());
        interviewDto.setUserTimeId(interview.getUserTime().getId());
        interviewDto.setInternshipId(interview.getInternshipId());
        return interviewDto;
    }
}
