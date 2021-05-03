package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.BaseDto;
import com.exadel.recruitmentPlatform.entity.BaseEntity;

import javax.transaction.NotSupportedException;

public interface BaseMapper<E extends BaseEntity, D extends BaseDto> {

    default E toEntity(D dto) throws NotSupportedException {
        throw new NotSupportedException();
    }

    D toDto(E entity);

}
