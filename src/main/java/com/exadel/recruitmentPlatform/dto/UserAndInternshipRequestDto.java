package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.User;
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
public class UserAndInternshipRequestDto  extends BaseDto {

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

    private String status;

    private String primarySkill;

    private String englishLevel;

    private String cv;

    private User user;

    private Internship internship;

}
