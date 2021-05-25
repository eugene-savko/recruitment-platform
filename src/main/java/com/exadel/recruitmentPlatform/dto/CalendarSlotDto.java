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
public class CalendarSlotDto extends BaseDto{

    private String firstName;

    private String lastName;

    private Long recruiterId;

    private LocalDateTime endDate;

    private LocalDateTime startDate;
}
