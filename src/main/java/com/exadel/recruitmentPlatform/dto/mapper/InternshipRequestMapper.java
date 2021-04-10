package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import org.springframework.stereotype.Component;

@Component
public class InternshipRequestMapper implements BaseMapper<InternshipRequest,InternshipRequestDto>{
    @Override
    public InternshipRequest toEntity(InternshipRequestDto dto) {
        InternshipRequest request = new InternshipRequest();
        request.setId(dto.getId());
        request.setStatus(dto.getStatus());
        request.setUser(dto.getUser());
        request.setInternship(dto.getInternship());
        request.setCv(dto.getCv());
        request.setEnglishLevel(dto.getEnglish_level());
        request.setPrimarySkill(dto.getPrimary_skill());
        return request;
    }

    @Override
    public InternshipRequestDto toDto(InternshipRequest entity) {
        InternshipRequestDto internshipRequestDto = new InternshipRequestDto();
        internshipRequestDto.setId(entity.getId());
        internshipRequestDto.setStatus(entity.getStatus());
        internshipRequestDto.setInternship(entity.getInternship());
        internshipRequestDto.setEnglish_level(entity.getEnglishLevel());
        internshipRequestDto.setPrimary_skill(entity.getPrimarySkill());
        internshipRequestDto.setUser(entity.getUser());
        internshipRequestDto.setCv(entity.getCv());
        return internshipRequestDto;
    }
}
