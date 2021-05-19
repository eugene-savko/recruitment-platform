package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InternshipRequestDto extends BaseDto {

    private InternshipRequestStatus status;
    private UserDto userDto;
    private Long specialityId;
    private String englishLevel;
    private String cv;
    private Long internshipId;
    private String country;
    private String city;
    private Long countryId;
    private Long cityId;
    private Long timeIntervalId;

}
