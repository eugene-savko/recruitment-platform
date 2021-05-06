package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InterviewDto extends BaseDto {

    @NotBlank
    private String feedback;

    @NotBlank
    private Long toUserId;

    @NotBlank
    private Long fromUserId;

    @NotBlank
    private Long userTimeId;

    @NotBlank
    private Long internshipId;

}
