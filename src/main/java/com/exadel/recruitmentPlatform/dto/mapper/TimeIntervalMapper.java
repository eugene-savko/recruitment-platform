package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.TimeIntervalDto;
import com.exadel.recruitmentPlatform.entity.TimeInterval;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TimeIntervalMapper implements BaseMapper <TimeInterval, TimeIntervalDto>{

    @Override
    public TimeIntervalDto toDto(TimeInterval timeInterval) {
        TimeIntervalDto timeIntervalDto = new TimeIntervalDto();
        timeIntervalDto.setId(timeInterval.getId());
        timeIntervalDto.setStartTime(timeInterval.getStartTime());
        timeIntervalDto.setEndTime(timeInterval.getEndTime());
        return timeIntervalDto;
    }

    public List<TimeIntervalDto> toDtos(List<TimeInterval> timeIntervals){
        return timeIntervals.stream().map(this::toDto).collect(Collectors.toList());
    }

}
