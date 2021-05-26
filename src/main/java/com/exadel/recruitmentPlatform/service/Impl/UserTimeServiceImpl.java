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
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.entity.SlotStatus;
import com.exadel.recruitmentPlatform.entity.TimeInterval;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.entity.UserTime;
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
    private final CalendarSlotMapper calendarSlotMapper;
    private final UserRepository userRepository;
    private final InternshipRequestRepository internshipRequestRepository;
    private final InterviewRepository interviewRepository;
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
    public List<CalendarSlotDto> getCalendarSlots(UserRole userRole, Long internshipId) {

        return calendarSlotMapper.toDtos(userTimeRepository
                .findByUserIn(userRepository.findByRoleAndInternships_Id(userRole, internshipId)));
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
                emailService.placeholderAssignmentInterview(internshipRequest, userTime.getStartDateTime(), userTime.getUser().getRole()), EmailType.ASSIGNMENT_INTERVIEW_TEMPLATE);

        return calendarSlotMapper.toDto(userTime);

    }

    @Override
    public CalendarSlotDto save(CalendarSlotDto calendarSlotDto) {
        UserTime userTime = calendarSlotMapper.toEntity(calendarSlotDto);

        User user = userRepository.findById(calendarSlotDto.getRecruiterId())
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + calendarSlotDto.getRecruiterId() + " doesn't exist"));

        userTime.setUser(user);
        userTime.setStatus(SlotStatus.FREE);

        if (userTime.getStartDateTime().isBefore(LocalDateTime.now())){
            throw new ValidationException("Wrong date time interval, it is in the past");
        }

        if (!calendarSlotDto.getEndDate().toLocalDate().equals(userTime.getStartDateTime().toLocalDate())){
            throw new ValidationException("Wrong date time interval, the interval must be kept in one day");
        } else if(!calendarSlotDto.getEndDate().toLocalTime().truncatedTo(ChronoUnit.SECONDS)
                .equals(userTime.getStartDateTime().plusMinutes(DURATION).toLocalTime().truncatedTo(ChronoUnit.SECONDS))){
            throw new ValidationException("Wrong date time interval, interval's duration must be 30 minutes");
        }

        userTimeRepository.save(userTime);
        return calendarSlotMapper.toDto(userTime);
    }
}
