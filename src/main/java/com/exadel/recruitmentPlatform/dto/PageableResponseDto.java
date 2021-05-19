package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PageableResponseDto {

    private List<UserCandidateDto> userCandidatesDto;
    private int pageSize;
    private int pageNumber;

    public PageableResponseDto(List<UserCandidateDto> userCandidatesDto, int pageSize, int pageNumber) {
        this.userCandidatesDto = userCandidatesDto;
        this.pageSize = pageSize;
        this.pageNumber = pageNumber;
    }

}
