package com.exadel.recruitmentPlatform.main.recruitmentplatform.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto implements BaseDto {

    private Long id;
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

    private String status;

}
