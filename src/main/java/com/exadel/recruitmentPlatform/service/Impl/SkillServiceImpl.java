package com.exadel.recruitmentPlatform.service.Impl;

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
    public SkillDto save( final SkillDto skillDto) {
        Skill skill= Optional.ofNullable(skillDto.getId())
                .map(item->update(skillDto))
                .orElseGet(()->create(skillDto));
        return skillMapper.toDto(skill);
    }

    @Override
    public SkillDto findById(Long id) {
        return skillRepository.findById(id).map(skillMapper::toDto)
                .orElseThrow(() -> new NullPointerException("Skill with id " + id + " doesn't find"));
    }

    private Skill update (final SkillDto skillDto){
        Skill skill=skillRepository.findById(skillDto.getId()).orElseThrow();
        skillMapper.update(skillDto, skill);
        Skill saved= skillRepository.save(skill);
        return saved;
    }

    private Skill create (final SkillDto skillDto){
        Skill skill=skillMapper.toEntity(skillDto);
        Skill saved=skillRepository.save(skill);
        return saved;
    }
}
