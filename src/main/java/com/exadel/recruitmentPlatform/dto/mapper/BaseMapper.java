package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.BaseDto;
import com.exadel.recruitmentPlatform.entity.BaseEntity;

public interface BaseMapper<E extends BaseEntity, D extends BaseDto> {

    E toEntity(D dto);

    D toDto(E entity);

}
