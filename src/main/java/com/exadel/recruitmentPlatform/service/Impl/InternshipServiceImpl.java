package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipOnAdminPageResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipShortDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipMapper;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipOnAdminPageMapper;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipShortMapper;
import com.exadel.recruitmentPlatform.entity.*;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRepository;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.service.CountryService;
import com.exadel.recruitmentPlatform.service.InternshipService;
import com.exadel.recruitmentPlatform.service.SkillService;
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
    private InternshipRequestRepository internshipRequestRepository;

    @Autowired
    private InternshipMapper internshipMapper;

    @Autowired
    private InternshipShortMapper internshipShortMapper;

    @Autowired
    private InternshipOnAdminPageMapper internshipOnAdminPageMapper;

    @Autowired
    private SpecialityService specialityService;

    @Autowired
    private CountryService countryService;

    @Autowired
    private SkillService skillService;

    @Override
    public InternshipResponseDto create(InternshipDto dto) {
        List<Speciality> specialities = specialityService.getSpecialties(dto.getSpecialities());
        List<Country> countries = countryService.getCountries(dto.getCountries());
        List<Skill> skills = skillService.getSkills(dto.getSkills());
        Internship internship = internshipMapper.toEntity(dto);
        internship.addSpecialities(specialities);
        internship.addSkills(skills);
        internship.addCountries(countries);
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

    @Override
    public List<InternshipResponseDto> getInternshipsByCountry(Long countryId) {
        return listToDto(internshipRepository.findInternshipsByCountryId(countryId));
    }

    @Override
    public InternshipResponseDto update(InternshipDto dto) {
        Internship internship = internshipRepository.findById(dto.getId())
                .orElseThrow(() ->
                        new EntityNotFoundException("Internship with id=" + dto.getId() + " doesn't exist"));
        updateInternship(dto, internship);
        Internship savedInternship = internshipRepository.save(internship);
        return internshipMapper.toDto(savedInternship);
    }

    @Override
    public List<InternshipOnAdminPageResponseDto> getInternshipsOnAdminPage() {
        return listToAdminPageDto(internshipRepository.findAll());
    }

    public List<InternshipOnAdminPageResponseDto> listToAdminPageDto(List<Internship> internships) {
        return internships.stream().map(internshipOnAdminPageMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public Integer getAmountOfInternshipRequests(Internship internship) {
        return internshipRequestRepository.countAllByInternshipId(internship.getId());
    }

    @Override
    public Integer getAmountOfInternshipRequestsByStatus(Internship internship) {
        return internshipRequestRepository.countAllByStatusAndInternshipId(InternshipRequestStatus.ACCEPTED, internship.getId());
    }

    @Override
    public List<InternshipShortDto> getIdsAndNamesOfInternships() {
        return listToShortDto(internshipRepository.findAll());
    }

    public List<InternshipShortDto> listToShortDto(List<Internship> internships) {
        return internships.stream().map(internshipShortMapper::toDto).collect(Collectors.toList());
    }

    private void updateInternship(InternshipDto dto, Internship internship) {
        internship.setName(dto.getName());
        internship.setDescription(dto.getDescription());
        internship.setDeadline(dto.getDeadline());
        internship.setStartDate(dto.getStartDate());
        internship.setEndDate(dto.getEndDate());
        internship.setStatus(dto.getStatus());
    }
}