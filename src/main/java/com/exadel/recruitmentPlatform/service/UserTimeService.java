package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.CalendarSlotResponseDto;
import com.exadel.recruitmentPlatform.dto.UserTimeDto;
import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserTime;

import java.util.List;

public interface UserTimeService {

    List<UserTime> splitIntervalIntoSlots (UserTimeDto dto);

    List<UserTimeResponseDto> saveUserIntervals (User user, List<UserTime> userTimes);

    //TODO get calendar slots not for all time, but for certain time interval (week or month)
    List<CalendarSlotResponseDto> getCalendarSlots(Long internshipId);

    CalendarSlotResponseDto update (CalendarSlotDto calendarSlotDto);
}
