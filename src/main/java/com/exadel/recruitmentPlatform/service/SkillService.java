package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.entity.Skill;

public interface SkillService {
    SkillDto save ( SkillDto dto);
    SkillDto findById ( Long id);
    void update ( SkillDto skillDto, Skill skill);

}
