package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class InternshipRequestProfileMapper implements BaseMapper<InternshipRequest, InternshipRequestProfileDto> {

    @Override
    public InternshipRequestProfileDto toDto(InternshipRequest internshipRequest) {
        InternshipRequestProfileDto internshipRequestDto =  new InternshipRequestProfileDto();
        internshipRequestDto.setId(internshipRequest.getId());
        internshipRequestDto.setFirstName(internshipRequest.getUser().getFirstName());
        internshipRequestDto.setLastName(internshipRequest.getUser().getLastName());
        internshipRequestDto.setEmail(internshipRequest.getUser().getEmail());
        internshipRequestDto.setPhone(internshipRequest.getUser().getPhone());
        internshipRequestDto.setOtherInformation(internshipRequest.getUser().getPhone());
        internshipRequestDto.setSpecialityId(internshipRequest.getSpecialityId());
        internshipRequestDto.setEnglishLevel(internshipRequest.getEnglishLevel());
        internshipRequestDto.setCv(internshipRequest.getCv());
        internshipRequestDto.setInternshipId(internshipRequest.getInternshipId());

        return internshipRequestDto;
    }
}
