package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseFilterDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PageableResponseMapper implements ListMapper<List <InternshipRequest>, PageableResponseDto>{

    @Override
    public PageableResponseDto toDto(List<InternshipRequest> internshipRequests, Page pageable) {
        PageableResponseDto pageableResponseDto = new PageableResponseDto();
        List<InternshipResponseFilterDto> internshipResponseFilterDtos = new ArrayList<>();
        for (InternshipRequest internshipRequest : internshipRequests) {
            InternshipResponseFilterDto internshipResponseFilterDto = new InternshipResponseFilterDto();
            internshipResponseFilterDto.setUserId(internshipRequest.getUser().getId());
            internshipResponseFilterDto.setFirstName(internshipRequest.getUser().getFirstName());
            internshipResponseFilterDto.setLastName(internshipRequest.getUser().getLastName());
            internshipResponseFilterDto.setCountryName(internshipRequest.getCountry().getName());
            internshipResponseFilterDto.setSpecialityName(internshipRequest.getSpeciality().getName());
            internshipResponseFilterDto.setStatusName(internshipRequest.getStatus().name());
            internshipResponseFilterDtos.add(internshipResponseFilterDto);
        }
        pageableResponseDto.setInternshipRequests(internshipResponseFilterDtos);
        pageableResponseDto.setPageSize(pageable.getSize());
        pageableResponseDto.setPageNumber(pageable.getPageable().getPageNumber());
        pageableResponseDto.setTotalPageNumber(pageable.getTotalPages());

        return pageableResponseDto;
    }
}
