package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InterviewDto;
import com.exadel.recruitmentPlatform.dto.InterviewResponseDto;
import com.exadel.recruitmentPlatform.entity.Interview;
import com.exadel.recruitmentPlatform.entity.TimeInterval;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.service.Impl.UserTimeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class InterviewMapper implements BaseMapper<Interview, InterviewDto> {

    private final UserMapper userMapper;

    @Override
    public InterviewDto toDto(Interview interview) {
        InterviewDto interviewDto=new InterviewDto();
        interviewDto.setFeedback(interview.getFeedback());
        interviewDto.setFromUserId(interview.getFromUser().getId());
        interviewDto.setToUserId(interview.getToUser().getId());
        interviewDto.setUserTimeId(interview.getUserTime().getId());
        interviewDto.setInternshipId(interview.getInternshipId());
        interviewDto.setEnglishLevel(interview.getEnglishLevel());
        return interviewDto;
    }

    public InterviewResponseDto toResponseDto(Interview interview) {
        InterviewResponseDto interviewDto = new InterviewResponseDto();
        interviewDto.setId(interview.getId());
        interviewDto.setFeedback(interview.getFeedback() != null ? interview.getFeedback() : "");
        interviewDto.setEnglishLevel(interview.getEnglishLevel());
        interviewDto.setFromUser(interview.getFromUser() != null ? userMapper.toResponseDto(interview.getFromUser()) : null);
        interviewDto.setStartDateTime(interview.getUserTime().getStartDateTime());
        interviewDto.setEndDateTime(
                interview.getUserTime().getStartDateTime().plusMinutes(UserTimeServiceImpl.DURATION));
        return interviewDto;
    }

    public List<InterviewResponseDto> toResponseDtos(List<Interview> interviews){
        return interviews.stream().map(this::toResponseDto).collect(Collectors.toList());
    }
}
