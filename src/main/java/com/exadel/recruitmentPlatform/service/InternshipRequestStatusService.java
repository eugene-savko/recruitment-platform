package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;

import java.util.List;

public interface InternshipRequestStatusService {

    List<InternshipRequestStatusDto> getStatuses();

}
