package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;

import javax.xml.bind.ValidationException;

public interface InternshipRequestService {

    InternshipRequestDto save(InternshipRequestDto InternshipRequestDto);
    InternshipRequestDto get(Long id);
    InternshipRequestProfileDto getInternshipRequestProfile(Long id);
    void updateStatus(Long id, InternshipRequestStatus status) throws ValidationException;

}
