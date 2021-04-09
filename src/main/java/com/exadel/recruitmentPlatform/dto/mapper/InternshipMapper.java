package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.Speciality;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.stream.Collectors;

@Component
public class InternshipMapper implements  BaseMapper<Internship, InternshipDto> {

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
        internship.setSpecialityList(dto.getSpecialityList().stream().map(e -> new Speciality(internship, e)).collect(Collectors.toList()));
        return internship;
    }

    @Override
    public InternshipDto toDto(Internship internship) {
        InternshipDto internshipDto = new InternshipDto();
        internshipDto.setId(internship.getId());
        internshipDto.setName(internship.getName());
        internshipDto.setDescription(internship.getDescription());
        internshipDto.setDeadline(String.valueOf(internship.getDeadline()));
        internshipDto.setStartDate(String.valueOf(internship.getStartDate()));
        internshipDto.setEndDate(String.valueOf(internship.getEndDate()));
        internshipDto.setStatus(internship.getStatus());
        internshipDto.setSpecialityList(internship.getSpecialityList().stream().map(Speciality::getName).collect(Collectors.toList()));
        return internshipDto;
    }
}
