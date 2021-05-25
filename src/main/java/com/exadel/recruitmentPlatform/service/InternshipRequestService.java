package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;

import javax.xml.bind.ValidationException;
import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestSearchDto;

public interface InternshipRequestService {

    InternshipRequestDto save(InternshipRequestDto InternshipRequestDto);
    InternshipRequestDto get(Long id);
    InternshipRequestProfileDto getInternshipRequestProfile(Long id);
    PageableResponseDto getInternshipRequests(InternshipRequestSearchDto internshipRequestSearchDto);
    void updateStatus(Long id, InternshipRequestStatus status) throws ValidationException;

}
