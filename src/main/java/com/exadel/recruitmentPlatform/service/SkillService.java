package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.entity.Skill;

import java.util.List;
import java.util.Set;

public interface SkillService {

    List<Skill> getSkills(Set<Long> ids);

    List<SkillDto> getSkills();

    SkillDto getSkillById(Long id);

    Skill getSkill(Long id);

}
