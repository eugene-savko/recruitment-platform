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
public class CalendarSlotDto extends BaseDto{

    private String firstName;

    private String lastName;

    @NotNull
    private Long members;

    @NotNull
    private LocalDateTime endDate;

    @NotNull
    private LocalDateTime startDate;
}
