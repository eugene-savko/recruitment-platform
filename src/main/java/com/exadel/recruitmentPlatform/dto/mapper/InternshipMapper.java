package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.entity.Internship;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@AllArgsConstructor
public class InternshipMapper implements Mapper<Internship, InternshipDto, InternshipResponseDto> {

    private final SpecialityMapper specialityMapper;
    private final SkillMapper skillMapper;
    private final CountryMapper countryMapper;

    @Override
    public Internship toEntity(InternshipDto dto) {
        Internship internship = new Internship();
        internship.setId(dto.getId());
        internship.setName(dto.getName());
        internship.setDescription(dto.getDescription());
        internship.setDeadline(LocalDate.parse(dto.getDeadline()));
        internship.setStartDate(LocalDate.parse(dto.getStartDate()));
        internship.setEndDate(LocalDate.parse(dto.getEndDate()));
        internship.setStatus(dto.getStatus());
        return internship;
    }

    @Override
    public InternshipResponseDto toDto(Internship internship) {
        InternshipResponseDto internshipDto = new InternshipResponseDto();
        internshipDto.setId(internship.getId());
        internshipDto.setName(internship.getName());
        internshipDto.setDescription(internship.getDescription());
        internshipDto.setDeadline(String.valueOf(internship.getDeadline()));
        internshipDto.setStartDate(String.valueOf(internship.getStartDate()));
        internshipDto.setEndDate(String.valueOf(internship.getEndDate()));
        internshipDto.setStatus(internship.getStatus());
        internshipDto.setSpecialities(specialityMapper.toDtos(internship.getSpecialities()));
        internshipDto.setCountries(countryMapper.toDtos(internship.getCountries()));
        internshipDto.setSkills(skillMapper.toDtos(internship.getSkills()));
        return internshipDto;
    }
}
