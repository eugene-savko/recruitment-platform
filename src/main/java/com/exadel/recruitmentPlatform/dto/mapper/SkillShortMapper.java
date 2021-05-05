package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.SkillShortDto;
import com.exadel.recruitmentPlatform.entity.Skill;
import org.springframework.stereotype.Component;

@Component
public class SkillShortMapper implements BaseMapper<Skill, SkillShortDto> {

    @Override
    public SkillShortDto toDto(Skill entity) {
        SkillShortDto skillShortDto = new SkillShortDto();
        skillShortDto.setId(entity.getId());
        skillShortDto.setName(entity.getName());
        return skillShortDto;
    }
}
