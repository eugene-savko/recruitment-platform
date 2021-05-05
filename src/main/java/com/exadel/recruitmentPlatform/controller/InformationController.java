package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InformationRequestDto;
import com.exadel.recruitmentPlatform.service.InformationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping ("/information")
public class InformationController {

    private final InformationService informationService;

    @GetMapping("/{InternshipId}")
    public InformationRequestDto getUser(@PathVariable Long InternshipId) {
        return informationService.getInternshipSkillsAndAllUserStatuses(InternshipId);
    }

}
