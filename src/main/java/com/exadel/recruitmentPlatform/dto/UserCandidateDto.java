package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserCandidateDto {

    private Long userId;
    private String firstName;
    private String lastName;
    private String specialityName;
    private String countryName;
    private String statusName;

    public UserCandidateDto(Long userId, String firstName, String lastName, String specialityName,
                            String countryName, String statusName) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialityName = specialityName;
        this.countryName = countryName;
        this.statusName = statusName;
    }

}
