package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class InformationRequestDto extends BaseDto {

    private List<InternshipRequestStatusDto> statuses;
    private List<SpecialityShortDto> specialities;

}
