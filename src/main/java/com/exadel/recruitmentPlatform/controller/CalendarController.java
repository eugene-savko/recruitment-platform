package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.UserCalendarDto;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.service.UserService;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/calendars")
public class CalendarController {

    private final UserTimeService userTimeService;
    private final UserService userService;

    @GetMapping
    public List<CalendarSlotDto> getCalendarSlots(@RequestParam("userRole") UserRole userRole, @RequestParam("internshipId") Long internshipId) {
        return userTimeService.getCalendarSlots(userRole, internshipId);
    }

    @GetMapping("/users")
    public List<UserCalendarDto> getUserCalendars(@RequestParam("userRole") UserRole userRole, @RequestParam("internshipId") Long internshipId) {
        return userService.getUserCalendars(userRole, internshipId);
    }
}
