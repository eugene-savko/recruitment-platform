package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InternshipRequestDto extends BaseDto {

    private InternshipRequestStatus status;
    private UserDto userDto;
    private Long specialityId;
    private String englishLevel;
    private String cv;
    private Long internshipId;

}
