package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InternshipRequestDto extends BaseDto {

    private InternshipRequestStatus status;
    private Long userId;
    private Long primarySkillId;
    private String english_level;
    private String cv;
    private Long internshipId;

    public InternshipRequestDto(InternshipRequestStatus status, Long userId, Long internshipId,
                                Long primarySkillId, String english_level, String cv) {
        this.status = status;
        this.userId = userId;
        this.internshipId = internshipId;
        this.primarySkillId = primarySkillId;
        this.english_level = english_level;
        this.cv = cv;
    }
}
