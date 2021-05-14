package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.CalendarSlotResponseDto;
import com.exadel.recruitmentPlatform.dto.UserTimeDto;
import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.dto.mapper.CalendarSlotMapper;
import com.exadel.recruitmentPlatform.dto.mapper.UserTimeMapper;
import com.exadel.recruitmentPlatform.entity.*;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.*;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
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
    private final InternshipRepository internshipRepository;
    private final UserRepository userRepository;
    private final InterviewRepository interviewRepository;
    private final InternshipRequestRepository internshipRequestRepository;

    @Override
    public List<UserTime> splitIntervalIntoSlots(UserTimeDto dto) {
        List<UserTime> userTimeSlots = new LinkedList<>();

        for (LocalDateTime time = dto.getStartDateTime();
             time.isBefore(dto.getEndDateTime());
             time = time.plusMinutes(DURATION)){

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
    public List<CalendarSlotResponseDto> getCalendarSlots(Long internshipId) {
        return calendarSlotMapper.toDtos(userTimeRepository
                .findByUserRoleAndUserIds(
                        UserRole.RECRUITER,
                        UserRole.SPECIALIST,
                        internshipRepository.findUserIdsByInternshipId(internshipId)));
    }

    @Override
    public CalendarSlotResponseDto update(CalendarSlotDto calendarSlotDto) {
        UserTime userTime = userTimeRepository.findById(calendarSlotDto.getId())
                .orElseThrow(() -> new EntityNotFoundException("User time interval with id=" + calendarSlotDto.getId() + " doesn't exist"));

        User toUser = userRepository.findById(calendarSlotDto.getCandidateId())
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + calendarSlotDto.getCandidateId() + " doesn't exist"));

        InternshipRequest internshipRequest = internshipRequestRepository.findById(calendarSlotDto.getInternshipRequestId())
                .orElseThrow(() -> new EntityNotFoundException("Internship request with id=" + calendarSlotDto.getInternshipRequestId() + " doesn't exist"));

        //TODO add such check for updateFeedback
        if ((userTime.getUser().getRole() == UserRole.RECRUITER && internshipRequest.getStatus() != InternshipRequestStatus.UNDER_CONSIDERATION)
            || (userTime.getUser().getRole() == UserRole.SPECIALIST && internshipRequest.getStatus() != InternshipRequestStatus.RECRUITER_INTERVIEW)) {

            //TODO ask what exception is better to use
            throw new RuntimeException("Action is not available for a candidate with status " + internshipRequest.getStatus());
        }

        userTime.setStatus(SlotStatus.OCCUPIED);

        Interview interview = new Interview();
        interview.setToUser(toUser);
        interview.setFromUser(userTime.getUser());
        interview.setUserTime(userTime);
        interview.setInternshipId(internshipRequest.getInternshipId());
        userTime.setInterview(interview);

        interviewRepository.save(interview);
        userTimeRepository.save(userTime);
        return calendarSlotMapper.toDto(userTime);
    }



}
