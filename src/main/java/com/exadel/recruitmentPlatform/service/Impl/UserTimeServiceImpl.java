package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.InterviewAssignmentDto;
import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.dto.mapper.CalendarSlotMapper;
import com.exadel.recruitmentPlatform.dto.mapper.UserTimeMapper;
import com.exadel.recruitmentPlatform.entity.*;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.repository.InterviewRepository;
import com.exadel.recruitmentPlatform.repository.UserTimeRepository;
import com.exadel.recruitmentPlatform.service.EmailService;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.ValidationException;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class UserTimeServiceImpl implements UserTimeService {

    public static final Long DURATION = 30L;

    private final UserTimeRepository userTimeRepository;
    private final UserTimeMapper userTimeMapper;
    private final InternshipRequestRepository internshipRequestRepository;
    private final InterviewRepository interviewRepository;
    private final CalendarSlotMapper calendarSlotMapper;
    private final EmailService emailService;

    @Override
    public List<UserTime> splitIntervalIntoSlots(TimeInterval timeInterval) {
        List<UserTime> userTimeSlots = new LinkedList<>();

        for (LocalDateTime time = timeInterval.getStartTime();
             time.isBefore(timeInterval.getEndTime());
             time = time.plusMinutes(DURATION)) {
            userTimeSlots.add(new UserTime(time, SlotStatus.FREE));
        }
        return userTimeSlots;
    }

    @Override
    public List<UserTimeResponseDto> saveUserIntervals(User user, List<UserTime> userTimes) {
        userTimes.forEach(userTime -> userTime.setUser(user));
        return userTimeRepository.saveAll(userTimes)
                .stream().map(userTimeMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public CalendarSlotDto update(InterviewAssignmentDto interviewAssignmentDto) {
        UserTime userTime = userTimeRepository.findById(interviewAssignmentDto.getId())
                .orElseThrow(() -> new EntityNotFoundException("User time interval with id=" + interviewAssignmentDto.getId() + " doesn't exist"));

        InternshipRequest internshipRequest = internshipRequestRepository.findById(interviewAssignmentDto.getInternshipRequestId())
                .orElseThrow(() -> new EntityNotFoundException("Internship request with id=" + interviewAssignmentDto.getInternshipRequestId() + " doesn't exist"));

        User candidate = internshipRequest.getUser();

        if (userTime.getStartDateTime().isBefore(LocalDateTime.now())){
            throw new ValidationException("Wrong date time interval, it is in the past");
        }

        if (userTime.getStatus() != SlotStatus.FREE){
            throw new ValidationException("Wrong date time interval, this slot isn't free");
        }

        if (userTime.getUser().getRole() == UserRole.RECRUITER) {
            if (internshipRequest.getStatus() != InternshipRequestStatus.UNDER_CONSIDERATION){
                throw new ValidationException("Wrong internship request status " + internshipRequest.getStatus());
            }
            internshipRequest.setStatus(InternshipRequestStatus.RECRUITER_INTERVIEW);
        } else if (userTime.getUser().getRole() == UserRole.SPECIALIST) {
            if (internshipRequest.getStatus() != InternshipRequestStatus.RECRUITER_INTERVIEW_PASSED){
                throw new ValidationException("Wrong internship request status " + internshipRequest.getStatus());
            }
            internshipRequest.setStatus(InternshipRequestStatus.TECHNICAL_SPECIALIST_INTERVIEW);
        }

        if (userTimeRepository.findByUserId(candidate.getId()).stream()
                .noneMatch(userTimeInstance -> userTime
                        .getStartDateTime().toLocalTime().truncatedTo(ChronoUnit.SECONDS)
                        .equals(userTimeInstance.getStartDateTime().toLocalTime().truncatedTo(ChronoUnit.SECONDS)))){
            throw new ValidationException("Wrong time interval, it doesn't match the candidate's time priority");
        }

        userTime.setStatus(SlotStatus.OCCUPIED);

        Interview interview = new Interview();
        interview.setToUser(candidate);
        interview.setFromUser(userTime.getUser());
        interview.setUserTime(userTime);
        interview.setInternshipId(internshipRequest.getInternshipId());
        userTime.setInterview(interview);

        internshipRequestRepository.save(internshipRequest);
        interviewRepository.save(interview);
        userTimeRepository.save(userTime);

        emailService.sendEmail(candidate.getEmail(),
                emailService.placeholderAssignmentInterview(internshipRequest, userTime.getStartDateTime(), userTime.getUser().getRole()), DefaultEmailService.ASSIGNMENT_INTERVIEW_TEMPLATE);

        return calendarSlotMapper.toDto(userTime);

    }
}
