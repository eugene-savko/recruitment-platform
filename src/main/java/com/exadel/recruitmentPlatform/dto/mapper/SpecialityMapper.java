package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.SpecialityDto;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class SpecialityMapper implements BaseMapper<Speciality, SpecialityDto> {

    private final SpecialityRepository specialityRepository;

    @Override
    public Speciality toEntity(SpecialityDto dto) {
        Speciality speciality = new Speciality();
        speciality.setId(dto.getId()); // != null ? specialityRepository.findByName(dto.getName()).getId() : null
        speciality.setName(dto.getName());
        return speciality;
    }

    @Override
    public SpecialityDto toDto(Speciality speciality) {
        SpecialityDto specialityDto = new SpecialityDto();
        specialityDto.setId(speciality.getId());
        specialityDto.setName(speciality.getName());
        return specialityDto;
    }

    public List<SpecialityDto> toDtos(List<Speciality> specialities){
        return specialities.stream().map(this::toDto).collect(Collectors.toList());
    }
}
