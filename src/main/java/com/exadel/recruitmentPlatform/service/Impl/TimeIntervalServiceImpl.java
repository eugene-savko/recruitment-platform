package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.TimeIntervalDto;
import com.exadel.recruitmentPlatform.dto.mapper.TimeIntervalMapper;
import com.exadel.recruitmentPlatform.entity.TimeInterval;
import com.exadel.recruitmentPlatform.repository.TimeIntervalRepository;
import com.exadel.recruitmentPlatform.service.TimeIntervalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TimeIntervalServiceImpl implements TimeIntervalService {

    @Autowired
    TimeIntervalRepository timeIntervalRepository;

    @Autowired
    TimeIntervalMapper timeIntervalMapper;

    @Override
    public List<TimeIntervalDto> getTimeInterval() {
        List<TimeInterval> timeIntervals = timeIntervalRepository.findAll();
        return timeIntervalMapper.toDtos(timeIntervals);
    }

}
