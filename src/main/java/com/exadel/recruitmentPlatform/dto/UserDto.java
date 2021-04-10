package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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

    private String city;

    private String photo;

    private String phone;

    private String otherInformation;

    public UserDto(@NotBlank @Size(min = 1, max = 50) String firstName,
                   @NotBlank @Size(min = 1, max = 50) String lastName, @Email @Size(min = 5, max = 50)
                   String email, String country, String city, String phone, UserRole role, String otherInformation) {
        this.otherInformation = otherInformation;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
        this.city = city;
        this.phone = phone;
        this.role = role;

    }
}
