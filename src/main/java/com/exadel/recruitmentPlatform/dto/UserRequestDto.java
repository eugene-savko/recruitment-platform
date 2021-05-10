package com.exadel.recruitmentPlatform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDto extends BaseDto {

    private Long internshipId;
    private String fullName;
    private List<Long> specialityIds;
    private List<String> statuses;
    private int size;
    private int page;
}
