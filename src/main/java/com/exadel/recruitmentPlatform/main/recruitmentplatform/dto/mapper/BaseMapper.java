package com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.mapper;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.BaseDto;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.entity.BaseEntity;

public abstract class BaseMapper<E extends BaseEntity, D extends BaseDto> {

    abstract E map(D dto);

    abstract D map(E entity);

}
