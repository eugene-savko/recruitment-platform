package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InternshipResponseDto extends BaseDto {
    @NotBlank
    @Size(min = 1, max = 50)
    private String name;

    @NotBlank
    @Size(min = 1, max = 1500)
    private String description;

    @NotBlank
    @Size(min = 10, max = 10) //format "2021-12-30"
    private String deadline;

    @NotBlank
    @Size(min = 10, max = 10) //format "2021-12-30"
    private String startDate;

    @NotBlank
    @Size(min = 10, max = 10) //format "2021-12-30"
    private String endDate;

    @NotBlank
    @Size(min = 1, max = 50) //format "Java, JavaScript"
    private InternshipStatus status;

    @NotBlank
    private List<SpecialityDto> specialities;
}
