package com.exadel.recruitmentPlatform.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalendarSlotResponseDto extends BaseDto{

    @JsonProperty("title")
    private String candidate;

    @JsonProperty("members")
    private Long recruiterId;

    private LocalDateTime endDate;

    private LocalDateTime startDate;
}
