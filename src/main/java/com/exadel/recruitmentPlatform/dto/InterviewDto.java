package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InterviewDto extends BaseDto {

    @NotBlank
    private String feedback;

    private Long englishLevel;
    private String englishLevelName;

    @NotNull
    private Long toUserId;

    @NotNull
    private Long fromUserId;

    @NotNull
    private Long userTimeId;

    @NotNull
    private Long internshipId;

}
