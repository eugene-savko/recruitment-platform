package com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.mapper;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.BaseDto;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.entity.BaseEntity;

public interface BaseMapper<E extends BaseEntity, D extends BaseDto> {

    E map(final D dto);

    D map(final E entity);

}
