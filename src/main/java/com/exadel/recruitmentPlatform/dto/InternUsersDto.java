package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InternUsersDto extends BaseDto {

    private String fullName;
    private String specialityName;
    private String countryName;
    private Long internshipRequestId;
    private String statusName;

    public InternUsersDto(String fullName, String specialityName, String countryName,
                          Long internshipRequestId, String statusName) {
        this.fullName = fullName;
        this.specialityName = specialityName;
        this.countryName = countryName;
        this.internshipRequestId = internshipRequestId;
        this.statusName = statusName;
    }

}
