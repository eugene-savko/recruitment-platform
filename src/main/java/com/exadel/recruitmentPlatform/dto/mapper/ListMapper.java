package com.exadel.recruitmentPlatform.dto.mapper;

import org.springframework.data.domain.Page;

public interface ListMapper<E, Response> {

    Response toDto(E entity, Page pageable);
}
