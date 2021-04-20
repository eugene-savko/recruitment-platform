package com.exadel.recruitmentPlatform.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialityDto extends BaseDto {

    @NotBlank
    @Size(min = 1, max = 50)
    private String name;
}
