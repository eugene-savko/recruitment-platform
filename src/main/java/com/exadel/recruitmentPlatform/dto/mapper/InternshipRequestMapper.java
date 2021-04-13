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
        request.setUserId(dto.getUserId());
        request.setInternshipId(dto.getInternshipId());
        request.setCv(dto.getCv());
        request.setEnglishLevel(dto.getEnglish_level());
        request.setPrimarySkill(dto.getPrimarySkillId());
        return request;
    }

    @Override
    public InternshipRequestDto toDto(InternshipRequest entity) {
        InternshipRequestDto internshipRequestDto = new InternshipRequestDto();
        internshipRequestDto.setId(entity.getId());
        internshipRequestDto.setStatus(entity.getStatus());
        internshipRequestDto.setInternshipId(entity.getInternshipId());
        internshipRequestDto.setEnglish_level(entity.getEnglishLevel());
        internshipRequestDto.setPrimarySkillId(entity.getPrimarySkill());
        internshipRequestDto.setUserId(entity.getUserId());
        internshipRequestDto.setCv(entity.getCv());
        return internshipRequestDto;
    }
}
