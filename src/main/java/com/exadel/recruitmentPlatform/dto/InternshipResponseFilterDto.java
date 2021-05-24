package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InternshipResponseFilterDto {

    private Long internshipId;
    private String firstName;
    private String lastName;
    private String specialityName;
    private String countryName;
    private String statusName;

}
