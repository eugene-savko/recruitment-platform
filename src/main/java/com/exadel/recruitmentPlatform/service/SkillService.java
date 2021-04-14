package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.SkillDto;

public interface SkillService {

    SkillDto save(SkillDto dto);

    SkillDto get(Long id);

}
