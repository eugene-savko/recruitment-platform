package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestSearchDto;
import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.StatusDto;

import javax.xml.bind.ValidationException;

public interface InternshipRequestService {

    InternshipRequestDto save(InternshipRequestDto InternshipRequestDto);
    InternshipRequestDto get(Long id);
    InternshipRequestProfileDto getInternshipRequestProfile(Long id);
    PageableResponseDto getInternshipRequests(InternshipRequestSearchDto internshipRequestSearchDto);
    void updateStatus(StatusDto statusDto) throws ValidationException;

}
