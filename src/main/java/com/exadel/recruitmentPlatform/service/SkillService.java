package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.entity.Skill;

public interface SkillService {
    SkillDto save (final SkillDto dto);
    SkillDto findById (final Long id);
    void update (final SkillDto skillDto, Skill skill);

}
