package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDetailDto extends BaseDto {

    private String firstName;
    private String lastName;
    private String specialityName;
    private String countryName;
    private Long internshipRequestId;
    private String statusName;

    public UserDetailDto(String firstName, String lastName, String specialityName, String countryName,
                         Long internshipRequestId, String statusName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialityName = specialityName;
        this.countryName = countryName;
        this.internshipRequestId = internshipRequestId;
        this.statusName = statusName;
    }

}
