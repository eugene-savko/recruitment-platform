package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;
import com.exadel.recruitmentPlatform.service.InternshipRequestStatusService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/internship-request-statuses")
public class InternshipRequestStatusController {

    private final InternshipRequestStatusService internshipRequestStatusService;

    @GetMapping
    public List<InternshipRequestStatusDto> getStatuses() {
        return internshipRequestStatusService.getStatuses();
    }


}

