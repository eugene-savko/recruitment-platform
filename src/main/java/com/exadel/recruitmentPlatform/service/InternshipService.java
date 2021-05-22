package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipOnAdminPageResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipShortDto;
import com.exadel.recruitmentPlatform.entity.Internship;

import java.util.List;

public interface InternshipService {
    InternshipResponseDto create(InternshipDto dto);

    InternshipResponseDto get(Long id);

    List<InternshipResponseDto> getInternships();

    List<InternshipResponseDto> getInternshipsBySpeciality(Long specialityId);

    List<InternshipResponseDto> getInternshipsByCountry(Long contryId);

    List<InternshipShortDto> getIdsAndNamesOfInternships();

    InternshipResponseDto update(InternshipDto dto);

    List<InternshipOnAdminPageResponseDto> getInternshipsOnAdminPage();

    Integer getAmountOfInternshipRequests(Internship internship);

    Integer getAmountOfInternshipRequestsByStatus(Internship internship);
}
