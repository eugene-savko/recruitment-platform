package com.exadel.recruitmentPlatform.dto.mapper;

public interface ListMapper<E, Response> {

    Response toDto(E entity, int pageSize, int pageNumber, int totalPageNumber);
}
