package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.InterviewAssignmentDto;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("api/calendars")
public class CalendarController {

    private final UserTimeService userTimeService;

    @Secured({"ROLE_RECRUITER", "ROLE_ADMIN"})
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CalendarSlotDto> updateUserTime(@Valid @RequestBody InterviewAssignmentDto dto) {
        return ResponseEntity.ok(userTimeService.update(dto));
    }

    @Secured({"ROLE_ADMIN"})
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<CalendarSlotDto> save(@Valid @RequestBody CalendarSlotDto calendarSlotDto) {
        return ResponseEntity.ok(userTimeService.save(calendarSlotDto));
    }
}
