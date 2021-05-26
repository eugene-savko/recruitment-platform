package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.SkillDto;
import com.exadel.recruitmentPlatform.dto.SpecialityDto;
import com.exadel.recruitmentPlatform.dto.mapper.SkillMapper;
import com.exadel.recruitmentPlatform.entity.Skill;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.repository.SkillRepository;
import com.exadel.recruitmentPlatform.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class SkillServiceImpl implements SkillService {

    @Autowired
    SkillRepository skillRepository;

    @Autowired
    SkillMapper skillMapper;

    @Override
    public List<Skill> getSkills(Set<Long> ids) {
        return skillRepository.findByIdIn(ids);
    }

    @Override
    public List<SkillDto> getSkills() {
        return skillMapper.toDtos(skillRepository.findAll());
    }

    @Override
    public SkillDto getSkillById(Long id) {
        return skillMapper.toDto(skillRepository.findById(id).get());
    }

    @Override
    public Skill getSkill(Long id) {
        return skillRepository.findById(id).get();
    }
}
