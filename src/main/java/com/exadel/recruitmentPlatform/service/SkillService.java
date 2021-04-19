package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.entity.Skill;
import com.exadel.recruitmentPlatform.entity.Speciality;

import java.util.List;
import java.util.Set;

public interface SkillService {

    List<Skill> getSkills(Set<Long> ids);
    Skill getSkillById(Long id);

}
