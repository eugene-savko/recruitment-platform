package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalendarSlotDto extends BaseDto {

    @NotNull
    private Long candidateId;

    @NotNull
    private Long internshipRequestId;
}
