package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipMapper;
import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRepository;
import com.exadel.recruitmentPlatform.service.InternshipService;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class InternshipServiceImpl implements InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private InternshipMapper internshipMapper;

    @Autowired
    private SpecialityService specialityService;

    @Override
    public InternshipResponseDto create(InternshipDto dto) {
        List<Speciality> specialities = specialityService.getSpecialties(dto.getSpecialities());
        Internship internship = internshipMapper.toEntity(dto);
        internship.addSpecialities(specialities);
        Internship saved = internshipRepository.save(internship);
        return internshipMapper.toDto(saved);
    }

    @Override
    public InternshipResponseDto get(Long id) {
        return internshipRepository.findById(id).map(internshipMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("Internship with id=" + id + " doesn't exist"));
    }

    @Override
    public List<InternshipResponseDto> getInternships() {
        return listToDto(internshipRepository.findAll());
    }

    public List<InternshipResponseDto> listToDto(List<Internship> internshipList) {
        return internshipList.stream().map(internshipMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<InternshipResponseDto> getInternshipsBySpeciality(Long specialityId) {
        return listToDto(internshipRepository.findInternshipsBySpecialityId(specialityId));
    }

    private Internship update(InternshipDto dto) {
        Internship internship = internshipRepository.findById(dto.getId()).orElseThrow(() -> new EntityNotFoundException("Internship with id=" + dto.getId() + " doesn't exist"));
        update(dto, internship);
        Internship saved = internshipRepository.save(internship);
        return saved;
    }

    public void update(InternshipDto dto, Internship internship) {
        internship.setName(dto.getName());
        internship.setDescription(dto.getDescription());
        internship.setDeadline(dto.getDeadline());
        internship.setStartDate(dto.getStartDate());
        internship.setEndDate(dto.getEndDate());
        internship.setStatus(dto.getStatus());
    }
}
