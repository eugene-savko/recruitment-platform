package com.exadel.recruitmentPlatform.main.recruitmentplatform.service;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.BaseDto;

public interface BaseService<Dto extends BaseDto> {
    Dto save(final Dto dto);
    Dto findById(final Long id);
    void deleteById(final Long id);
}