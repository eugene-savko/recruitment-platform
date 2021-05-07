package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InformationRequestDto;

public interface InformationService {

    InformationRequestDto getInternshipsInformation(Long internshipId);

}
