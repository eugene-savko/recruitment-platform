package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.UserRole;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Getter
@Setter
@SuperBuilder
public class UserDto extends BaseDto {

    @NotBlank
    @Size(min = 1, max = 50)
    private String firstName;
    @NotBlank
    @Size(min = 1, max = 50)
    private String lastName;
    @Email
    @Size(min = 5, max = 50)
    private String email;

    private UserRole role;

    private String skype;

    private String country;

    private String photo;

    private String phone;

}
