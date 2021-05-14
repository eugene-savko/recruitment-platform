package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/calendar")
public class CalendarController {

    private final UserTimeService userTimeService;

    @GetMapping(params = "internship")
    public List<CalendarSlotDto> getCalendarSlots(@RequestParam("internship") Long internshipId) {
        return userTimeService.getCalendarSlots(internshipId);
    }
}
