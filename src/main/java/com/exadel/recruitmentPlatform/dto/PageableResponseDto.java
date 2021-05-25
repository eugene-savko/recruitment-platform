package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PageableResponseDto {

    private List<InternshipResponseFilterDto> internshipRequests;
    private int pageSize;
    private int pageNumber;
    private int totalPageNumber;

}
