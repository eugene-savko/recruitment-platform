package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipMapper;
import com.exadel.recruitmentPlatform.entity.Country;
import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.Skill;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRepository;
import com.exadel.recruitmentPlatform.service.CountryService;
import com.exadel.recruitmentPlatform.service.InternshipService;
import com.exadel.recruitmentPlatform.service.SkillService;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
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

    @Autowired
    private CountryService countryService;

    @Autowired
    private SkillService skillService;

    @Override
    public InternshipResponseDto create(InternshipDto dto) {
        System.err.println("Set specialities "+dto.getSpecialities());
        List<Speciality> specialities = specialityService.getSpecialties(dto.getSpecialities());
        System.err.println("list specialities "+specialities);
        List <Country> countries=countryService.getCountries(dto.getCountries());
        List <Skill> skills=skillService.getSkills(dto.getSkills());
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
    public List<InternshipResponseDto> getInternshipsByCountry(Long contryId) {
        Country country=countryService.getCountryById(contryId);
        List <Internship> internshipsFiltered= new ArrayList<>();
        internshipRepository.findAll().forEach(internship -> {
            if (internship.getCountries().contains(country))
                internshipsFiltered.add(internship);});
        return listToDto(internshipsFiltered);
    }

    public InternshipResponseDto update(InternshipDto dto) {
        Internship internship = internshipRepository.findById(dto.getId())
                .orElseThrow(() ->
                        new EntityNotFoundException("Internship with id=" + dto.getId() + " doesn't exist"));
        update(dto, internship);
        return internshipMapper.toDto(internshipRepository.save(internship));
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
