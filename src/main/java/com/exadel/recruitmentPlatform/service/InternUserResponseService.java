package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternUsersDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InternUserResponseService {

    Page<InternUsersDto> getInternUsers(Pageable pageable);

}
