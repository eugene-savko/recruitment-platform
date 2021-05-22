package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.service.Impl.UserTimeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class CalendarSlotMapper implements BaseMapper<UserTime, CalendarSlotDto> {

    @Override
    public CalendarSlotDto toDto(UserTime userTime) {
        CalendarSlotDto calendarSlotDto = new CalendarSlotDto();
        calendarSlotDto.setId(userTime.getId());
        calendarSlotDto.setFirstName(userTime.getInterview() == null ? "" : userTime.getInterview().getToUser().getFirstName());
        calendarSlotDto.setLastName(userTime.getInterview() == null ? "" : userTime.getInterview().getToUser().getLastName());
        calendarSlotDto.setMembers(userTime.getUser().getId());
        calendarSlotDto.setStartDate(userTime.getStartDateTime());
        calendarSlotDto.setEndDate(userTime.getStartDateTime().plusMinutes(UserTimeServiceImpl.DURATION));

        return calendarSlotDto;
    }

    @Override
    public UserTime toEntity(CalendarSlotDto calendarSlotDto){
        UserTime userTime = new UserTime();
        userTime.setId(calendarSlotDto.getId());
        userTime.setStartDateTime(calendarSlotDto.getStartDate());

        return userTime;
    }

    public List<CalendarSlotDto> toDtos(List<UserTime> userTimes){
        return userTimes.stream().map(this::toDto).collect(Collectors.toList());
    }
}
