package com.exadel.recruitmentPlatform.main.recruitmentplatform.dto;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto extends BaseDto {

    @NotBlank
    @Size(min = 1, max = 50)
    private String firstName;
    @NotBlank
    @Size(min = 1, max = 50)
    private String lastName;
    @Email
    @Size(min = 5, max = 254)
    private String email;

    private String role;

    private String skype;

    private String country;

    private String photo;

    private String cv;

    private String phone;

    private String englishLevel;

}
