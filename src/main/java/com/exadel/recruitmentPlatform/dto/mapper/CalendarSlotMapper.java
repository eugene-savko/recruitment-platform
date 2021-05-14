package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.CalendarSlotResponseDto;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.service.Impl.UserTimeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class CalendarSlotMapper implements BaseMapper<UserTime, CalendarSlotResponseDto> {

    @Override
    public CalendarSlotResponseDto toDto(UserTime userTime) {
        CalendarSlotResponseDto calendarSlotResponseDto = new CalendarSlotResponseDto();
        calendarSlotResponseDto.setId(userTime.getId());
        calendarSlotResponseDto.setCandidate(userTime.getInterview() == null ? "" :
                userTime.getInterview().getToUser().getFirstName() + " " + userTime.getInterview().getToUser().getLastName());
        calendarSlotResponseDto.setRecruiterId(userTime.getUser().getId());
        calendarSlotResponseDto.setStartDate(userTime.getStartDateTime());
        calendarSlotResponseDto.setEndDate(userTime.getStartDateTime().plusMinutes(UserTimeServiceImpl.DURATION));

        return calendarSlotResponseDto;
    }

    public List<CalendarSlotResponseDto> toDtos(List<UserTime> userTimes){
        return userTimes.stream().map(this::toDto).collect(Collectors.toList());
    }
}
