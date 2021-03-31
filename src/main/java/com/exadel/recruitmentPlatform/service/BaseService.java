package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.BaseDto;

public interface BaseService<Dto extends BaseDto> {
    Dto save(final Dto dto);
    Dto findById(final Long id);
    void deleteById(final Long id);
}