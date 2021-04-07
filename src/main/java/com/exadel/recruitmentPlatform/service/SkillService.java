package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.SkillDto;

public interface SkillService {
    SkillDto save (final SkillDto dto);
    SkillDto findById (final Long id);


}
