package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InterviewDto;
import com.exadel.recruitmentPlatform.dto.mapper.InterviewMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.Interview;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.repository.InterviewRepository;
import com.exadel.recruitmentPlatform.service.InterviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@AllArgsConstructor
@Transactional
@Service
public class InterviewServiceImpl implements InterviewService {

    private final InterviewRepository interviewRepository;

    private final InterviewMapper interviewMapper;

    private final InternshipRequestRepository internshipRequestRepository;

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

}
