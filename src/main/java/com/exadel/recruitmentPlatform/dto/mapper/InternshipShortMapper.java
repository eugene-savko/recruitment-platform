package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipShortDto;
import com.exadel.recruitmentPlatform.entity.Internship;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class InternshipShortMapper implements BaseMapper<Internship, InternshipShortDto> {

    @Override
    public InternshipShortDto toDto(Internship entity) {
        InternshipShortDto internshipShortDto = new InternshipShortDto();
        internshipShortDto.setId(entity.getId());
        internshipShortDto.setName(entity.getName());
        return internshipShortDto;
    }
}
