package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.SpecialityShortDto;
import com.exadel.recruitmentPlatform.entity.Speciality;
import org.springframework.stereotype.Component;

@Component
public class SpecialityShortMapper implements BaseMapper<Speciality, SpecialityShortDto> {

    @Override
    public SpecialityShortDto toDto(Speciality entity) {
        SpecialityShortDto specialityShortDto = new SpecialityShortDto();
        specialityShortDto.setId(entity.getId());
        specialityShortDto.setName(entity.getName());
        return specialityShortDto;
    }
}
