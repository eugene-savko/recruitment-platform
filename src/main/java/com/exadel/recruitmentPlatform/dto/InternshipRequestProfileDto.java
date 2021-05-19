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

    private String firstName;

    private String lastName;

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