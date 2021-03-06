package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.InterviewAssignmentDto;
import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.entity.TimeInterval;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.entity.UserTime;

import java.util.List;

public interface UserTimeService {

    List<UserTime> splitIntervalIntoSlots(TimeInterval timeInterval);

    List<UserTimeResponseDto> saveUserIntervals(User user, List<UserTime> userTimes);

    //TODO get calendar slots not for all time, but for certain time interval (week or month)
    List<CalendarSlotDto> getCalendarSlots(UserRole userRole, Long internshipId);
    CalendarSlotDto update(InterviewAssignmentDto interviewAssignmentDto);

    CalendarSlotDto save(CalendarSlotDto calendarSlotDto);

}
