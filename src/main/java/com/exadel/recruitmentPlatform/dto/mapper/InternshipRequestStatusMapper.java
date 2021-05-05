package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatusEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class InternshipRequestStatusMapper implements BaseMapper<InternshipRequestStatusEntity, InternshipRequestStatusDto> {

    @Override
    public InternshipRequestStatusDto toDto(InternshipRequestStatusEntity entity) {
        InternshipRequestStatusDto InternshipRequestStatusDto = new InternshipRequestStatusDto();
        InternshipRequestStatusDto.setId(entity.getId());
        InternshipRequestStatusDto.setName(entity.getName());
        InternshipRequestStatusDto.setMessageKey(entity.getName().getMessageKey());
        return InternshipRequestStatusDto;
    }
}
