package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserTimeDto;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.repository.UserTimeRepository;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class UserTimeServiceImpl implements UserTimeService {

    private UserTimeRepository userTimeRepository;

    @Override
    public List<UserTime> splitIntervalIntoSlotsAndSave(UserTimeDto dto, User user) {
        List<UserTime> userTimeSlots = new ArrayList<>();

        for (LocalDateTime time = dto.getStartDateTime();
             time.isBefore(dto.getEndDateTime());
             time = time.plusMinutes(UserTime.DURATION)){

            userTimeSlots.add(userTimeRepository.save(new UserTime(time, true, user)));
        }
        return userTimeSlots;
    }
}
