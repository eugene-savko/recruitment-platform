package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
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

    @NotNull    //format "2021-12-30"
    private LocalDate deadline;

    @NotNull    //format "2021-12-30"
    private LocalDate startDate;

    @NotNull    //format "2021-12-30"
    private LocalDate endDate;

    @NotNull
    private InternshipStatus status;

    @NotBlank
    private String statusMessageKey;

    @NotEmpty
    private List<SpecialityDto> specialities;

    @NotBlank
    private List<CountryDto> countries;

    @NotBlank
    private List<CityDto> cities;

    @NotBlank
    private List<SkillDto> skills;

}
