package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;

import java.util.List;

public interface InternshipService {
    InternshipResponseDto create(InternshipDto dto);
    InternshipResponseDto get(Long id);
    InternshipResponseDto update (InternshipDto iDto);
    List<InternshipResponseDto> getInternships();
    List<InternshipResponseDto> getInternshipsBySpeciality(Long specialityId);
    List<InternshipResponseDto> getInternshipsByCountry(Long contryId);
}
