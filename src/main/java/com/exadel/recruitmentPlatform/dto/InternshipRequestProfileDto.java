package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InternshipRequestProfileDto extends BaseDto{

    private String firstName;

    private String lastName;

    private String email;

    private String country;

    private String city;

    private String phone;

    private String otherInformation;

    private Long specialityId;

    private String englishLevel;

    private String cv;

    private Long internshipId;

    private List<InterviewResponseDto> interviews;
}
