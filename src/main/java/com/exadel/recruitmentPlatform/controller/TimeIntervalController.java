package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.TimeIntervalDto;
import com.exadel.recruitmentPlatform.repository.TimeIntervalRepository;
import com.exadel.recruitmentPlatform.service.TimeIntervalService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/timeInterval")
public class TimeIntervalController {

    private final TimeIntervalService timeIntervalService;

    @GetMapping
    public List<TimeIntervalDto> getInterval() {
        return timeIntervalService.getTimeInterval();
    }
}
