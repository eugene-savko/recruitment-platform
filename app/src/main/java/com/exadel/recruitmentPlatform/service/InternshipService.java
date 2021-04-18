package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipDto;

public interface InternshipService {
    InternshipDto save(InternshipDto dto);
    InternshipDto findById(Long id);
}
