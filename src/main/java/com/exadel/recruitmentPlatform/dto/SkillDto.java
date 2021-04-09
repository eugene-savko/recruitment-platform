package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.SkillType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SkillDto extends BaseDto {

    @NotBlank
    @Size(min = 1, max = 50)
    private String name;

    @NotBlank
    @Size(min = 1, max = 50)
    private SkillType type;

    @NotBlank
    @Size(min = 1, max = 50)
    private String subtype;

}
