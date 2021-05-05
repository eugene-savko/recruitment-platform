package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.SpecialityDto;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/specialities")
public class SpecialityController {

    private final SpecialityService specialityService;

    @GetMapping
    public List<SpecialityDto> getSpecialities() {
        return specialityService.getSpecialities();
    }
}
