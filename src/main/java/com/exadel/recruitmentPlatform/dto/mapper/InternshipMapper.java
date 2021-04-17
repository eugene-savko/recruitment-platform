package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.entity.Internship;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class InternshipMapper implements Mapper<Internship, InternshipDto, InternshipResponseDto> {

    private final SpecialityMapper specialityMapper;

    @Override
    public Internship toEntity(InternshipDto dto) {
        Internship internship = new Internship();
        internship.setId(dto.getId());
        internship.setName(dto.getName());
        internship.setDescription(dto.getDescription());
        internship.setDeadline(dto.getDeadline());
        internship.setStartDate(dto.getStartDate());
        internship.setEndDate(dto.getEndDate());
        internship.setStatus(dto.getStatus());
        return internship;
    }

    @Override
    public InternshipResponseDto toDto(Internship internship) {
        InternshipResponseDto internshipDto = new InternshipResponseDto();
        internshipDto.setId(internship.getId());
        internshipDto.setName(internship.getName());
        internshipDto.setDescription(internship.getDescription());
        internshipDto.setDeadline(internship.getDeadline());
        internshipDto.setStartDate(internship.getStartDate());
        internshipDto.setEndDate(internship.getEndDate());
        internshipDto.setStatus(internship.getStatus());
        internshipDto.setSpecialities(specialityMapper.toDtos(internship.getSpecialities()));
        return internshipDto;
    }
}
