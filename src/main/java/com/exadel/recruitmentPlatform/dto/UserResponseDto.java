package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto extends BaseDto {

    private String firstName;

    private String lastName;

    private UserRole role;
}
