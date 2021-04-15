package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.BaseDto;
import com.exadel.recruitmentPlatform.entity.BaseEntity;

public interface Mapper<E extends BaseEntity, Request extends BaseDto, Response extends BaseDto> {

    E toEntity(Request dto);

    Response toDto(E entity);
}
