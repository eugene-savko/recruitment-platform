package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipStatus;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InternshipDto extends BaseDto {

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
    @Size(min = 1, max = 50)
    private List<String> specialityList;
}
