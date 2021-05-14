package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.CalendarSlotDto;
import com.exadel.recruitmentPlatform.dto.CalendarSlotResponseDto;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/calendar")
public class CalendarController {

    private final UserTimeService userTimeService;

    @GetMapping(params = "internship")
    public List<CalendarSlotResponseDto> getCalendarSlots(@RequestParam("internship") Long internshipId) {
        return userTimeService.getCalendarSlots(internshipId);
    }

    @Secured({"ROLE_RECRUITER", "ROLE_ADMIN"})
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CalendarSlotResponseDto> updateUserTime(
            @Valid @RequestBody CalendarSlotDto dto) {
        return ResponseEntity.ok(userTimeService.update(dto));
    }
}
