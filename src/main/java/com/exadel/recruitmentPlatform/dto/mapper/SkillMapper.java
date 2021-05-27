package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.entity.Skill;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SkillMapper implements BaseMapper<Skill, SkillDto> {

    @Override
    public Skill toEntity(SkillDto dto) {
        Skill skill = new Skill();
        skill.setName(dto.getName());
        skill.setType(dto.getType());
        skill.setSubtype(dto.getSubtype());
        return skill;
    }

    @Override
    public SkillDto toDto(Skill skill) {
        SkillDto skillDto = new SkillDto();
        skillDto.setId(skill.getId());
        skillDto.setName(skill.getName());
        skillDto.setType(skill.getType());
        skillDto.setSubtype(skill.getSubtype());
        return skillDto;
    }

    public List<SkillDto> toDtos(List<Skill> skills) {
        return skills.stream().map(this::toDto).collect(Collectors.toList());
    }

}
