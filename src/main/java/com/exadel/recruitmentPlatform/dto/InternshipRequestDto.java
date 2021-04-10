package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InternshipRequestDto extends BaseDto {

    private InternshipRequestStatus status;
    private User user;
    private Internship internship;
    private String primary_skill;
    private String english_level;
    private String cv;

    public InternshipRequestDto(InternshipRequestStatus status, User user, Internship internship,
                                String primary_skill, String english_level, String cv) {
        this.status = status;
        this.user = user;
        this.internship = internship;
        this.primary_skill = primary_skill;
        this.english_level = english_level;
        this.cv = cv;
    }
}
