package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InterviewResponseDto extends BaseDto {

    private String feedback;

    private String englishLevel;

    private UserResponseDto fromUser;

    private LocalDateTime startDateTime;

    @NotNull
    private LocalDateTime endDateTime;

}
