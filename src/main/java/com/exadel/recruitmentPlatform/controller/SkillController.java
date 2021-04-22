package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.service.SkillService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/skills")
public class SkillController {

    private final SkillService skillService;

    @GetMapping("/{id}")
    public SkillDto getSkill(@PathVariable Long id){
        return skillService.getSkillById(id);
    }
}
