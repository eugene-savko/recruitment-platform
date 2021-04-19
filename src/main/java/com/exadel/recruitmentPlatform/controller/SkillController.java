package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.service.SkillService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/skills")
public class SkillController {

    private final SkillService skillService;

/*
    @GetMapping("/{id}")
    public ResponseEntity<SkillDto> getSkill(@PathVariable Long id) {
        return ResponseEntity.ok(skillService.get(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<SkillDto> save(@Valid @RequestBody SkillDto skillDto) {
        return ResponseEntity.ok(skillService.save(skillDto));
    }
*/

}
