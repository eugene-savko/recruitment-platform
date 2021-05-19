package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InternshipRequestProfileDto extends BaseDto{

    @NotBlank
    @Size(min = 1, max = 50)
    private String firstName;

    @NotBlank
    @Size(min = 1, max = 50)
    private String lastName;

    @Email
    @Size(min = 5, max = 50)
    private String email;

    private String country;

    private String city;

    private String phone;

    private String otherInformation;

    private String speciality;

    private String englishLevel;

    private String cv;

    private String internship;

    private List<InterviewResponseDto> interviews;

    private LocalDateTime startPriorityTime;

    private LocalDateTime endPriorityTime;
}