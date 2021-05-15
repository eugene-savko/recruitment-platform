package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InterviewResponseDto extends BaseDto {

    private String feedback;

    private Long englishLevel;

    @NotNull
    private UserResponseDto fromUser;

    @NotNull
    private LocalDateTime startDateTime;
}
