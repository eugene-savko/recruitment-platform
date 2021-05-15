package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InterviewResponseDto;
import com.exadel.recruitmentPlatform.dto.mapper.InterviewMapper;
import com.exadel.recruitmentPlatform.dto.InterviewDto;
import com.exadel.recruitmentPlatform.entity.*;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.EnglishRepository;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.repository.InterviewRepository;
import com.exadel.recruitmentPlatform.service.InterviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Transactional
@Service
public class InterviewServiceImpl implements InterviewService {

    private final InterviewRepository interviewRepository;

    private final InterviewMapper interviewMapper;

    private final InternshipRequestRepository internshipRequestRepository;
    private final EnglishRepository englishRepository;

    @Override
    public InterviewDto updateFeedback(Long id, String feedback) {

        Interview interview = interviewRepository.findById(id).
                orElseThrow(() -> new EntityNotFoundException
                        ("Interview with this id= " + id + " doesn't exist"));

        InternshipRequest internshipRequest = Optional.of(internshipRequestRepository
                .findByUserIdAndInternshipId(interview.getToUser().getId(), interview.getInternshipId()))
                .orElseThrow(() -> new EntityNotFoundException("Doesn't find InternshipRequest for interview parameters: " +
                        "InternshipId= " + interview.getInternshipId() + ", ToUser " + interview.getToUser()));

        interview.setFeedback(feedback);

        if (interview.getFromUser().getRole() == UserRole.RECRUITER) {
            internshipRequest.setStatus(InternshipRequestStatus.RECRUITER_INTERVIEW_PASSED);
        } else if (interview.getFromUser().getRole() == UserRole.SPECIALIST) {
            internshipRequest.setStatus(InternshipRequestStatus.TECHNICAL_SPECIALIST_INTERVIEW_PASSED);
        }

        interviewRepository.save(interview);

        internshipRequestRepository.save(internshipRequest);

        return interviewMapper.toDto(interview);
    }

    @Override
    public List<InterviewResponseDto> getInterviews(Long userId, Long internshipId) {
        return interviewMapper.toResponseDtos(interviewRepository.findByToUserIdAndInternshipId(userId, internshipId));
    }

    @Override
    public InterviewDto updateEnglishLevel(Long id, String englishLevel) {
        Interview interview = interviewRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Interview under id "+id+" doesn't exist"));
        EnglishLevel level = Optional.ofNullable(englishRepository.getEnglishLevelByName(englishLevel))
                .orElseThrow(()-> new EntityNotFoundException("нет такого"));// TODO: 13.05.2021 How to fix this method
        interview.setEnglishLevel(level.getId());
        interviewRepository.save(interview);
        InterviewDto interviewDto = interviewMapper.toDto(interview);
        return interviewDto;
    }
    /*private User update(final UserDto userDto) {
        User user = userRepository.findById(userDto.getId())
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + userDto.getId() + " doesn't exist"));
        update(userDto, user);
        return userRepository.save(user);
    }*/



}
