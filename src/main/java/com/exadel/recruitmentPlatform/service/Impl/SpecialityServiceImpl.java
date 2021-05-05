package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.SpecialityDto;
import com.exadel.recruitmentPlatform.dto.mapper.SpecialityMapper;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class SpecialityServiceImpl implements SpecialityService {

    @Autowired
    private SpecialityRepository specialityRepository;

    @Autowired
    private SpecialityMapper specialityMapper;

    @Override
    public List<Speciality> getSpecialties(Set<Long> ids) {
        return specialityRepository.findByIdIn(ids);
    }

    @Override
    public Speciality getSpecialityById(Long id) {
        return specialityRepository.findById(id).get();
    }

    @Override
    public List<SpecialityDto> getSpecialities() {
        return listToDto(specialityRepository.findAll());
    }

    public List<SpecialityDto> listToDto(List<Speciality> specialities) {
        return specialities.stream().map(specialityMapper::toDto).collect(Collectors.toList());
    }
}
