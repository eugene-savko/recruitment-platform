package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.service.SkillService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/skill")

public class SkillController {
    private final SkillService skillService;

    @GetMapping("/{id}")
    public SkillDto getSkill (@PathVariable Long id){
        return skillService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SkillDto save (@Valid @RequestBody final SkillDto skillDto){
        return skillService.save(skillDto);
    }
}
