package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InternshipRequestService {

    InternshipRequestDto save(InternshipRequestDto InternshipRequestDto);
    InternshipRequestDto get(Long id);
    InternshipRequestProfileDto getInternshipRequestProfile(Long id);
    Page<InternshipRequest> getInternshipRequestByInternUsers(Pageable pageable);

}
