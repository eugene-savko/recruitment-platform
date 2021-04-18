package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;

public interface InternshipRequestService {

    InternshipRequestDto save(InternshipRequestDto InternshipRequestDto);
    InternshipRequestDto get(Long id);

}
