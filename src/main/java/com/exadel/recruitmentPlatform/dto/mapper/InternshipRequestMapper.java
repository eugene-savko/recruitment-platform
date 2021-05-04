package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class InternshipRequestMapper implements BaseMapper<InternshipRequest, InternshipRequestDto>{

    private final UserMapper userMapper;

    @Override
    public InternshipRequest toEntity(InternshipRequestDto dto) {
        InternshipRequest request = new InternshipRequest();
        request.setId(dto.getId());
        request.setStatus(dto.getStatus());
        request.setUser(dto.getUserDto() != null ? userMapper.toEntity(dto.getUserDto()) : null);
        request.setInternshipId(dto.getInternshipId());
        request.setCv(dto.getCv());
        request.setEnglishLevel(dto.getEnglishLevel());
        request.setSpecialityId(dto.getSpecialityId());
        request.setCountryId(dto.getCountryId());
        return request;
    }

    @Override
    public InternshipRequestDto toDto(InternshipRequest entity) {
        InternshipRequestDto internshipRequestDto = new InternshipRequestDto();
        internshipRequestDto.setId(entity.getId());
        internshipRequestDto.setStatus(entity.getStatus());
        internshipRequestDto.setInternshipId(entity.getInternshipId());
        internshipRequestDto.setEnglishLevel(entity.getEnglishLevel());
        internshipRequestDto.setSpecialityId(entity.getSpecialityId());
        internshipRequestDto.setUserDto(entity.getUser() != null ? userMapper.toDto(entity.getUser()) : null);
        internshipRequestDto.setCv(entity.getCv());
        internshipRequestDto.setCountryId(entity.getCountryId());
        return internshipRequestDto;
    }
}
