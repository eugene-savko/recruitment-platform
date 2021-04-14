package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.exceptions.SkillNotFoundException;
import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.dto.mapper.SkillMapper;
import com.exadel.recruitmentPlatform.entity.Skill;
import com.exadel.recruitmentPlatform.repository.SkillRepository;
import com.exadel.recruitmentPlatform.service.SkillService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;
    private final SkillMapper skillMapper;

    @Override
    public SkillDto save(SkillDto skillDto) {
        Skill skill= Optional.ofNullable(skillDto.getId())
                .map(item->update(skillDto))
                .orElseGet(()->create(skillDto));
        return skillMapper.toDto(skill);
    }

    @Override
    public SkillDto get(Long id) {
        return skillRepository.findById(id).map(skillMapper::toDto)
                .orElseThrow(() -> new SkillNotFoundException(id));
    }

    private Skill update (SkillDto skillDto){
        Skill skill=skillRepository.findById(skillDto.getId())
                .orElseThrow(() -> new SkillNotFoundException(skillDto.getId()));
        update(skillDto, skill);
        return skillRepository.save(skill);
    }

    private Skill create (SkillDto skillDto){
        Skill skill=skillMapper.toEntity(skillDto);
        return skillRepository.save(skill);
    }

    private void update(SkillDto skillDto, Skill skill) {
        skill.setName(skillDto.getName());
        skill.setType(skillDto.getType());
        skill.setSubtype(skillDto.getSubtype());
    }

}
