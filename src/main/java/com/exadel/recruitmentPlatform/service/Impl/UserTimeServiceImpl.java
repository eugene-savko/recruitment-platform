package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserTimeDto;
import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.dto.mapper.UserTimeMapper;
import com.exadel.recruitmentPlatform.entity.SlotStatus;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.repository.UserTimeRepository;
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
}
