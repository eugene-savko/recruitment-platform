package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "internship_request", schema = "public")
public class InternshipRequest extends BaseEntity{

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private InternshipRequestStatus status;

    @Column(name = "primary_skill")
    private Long primarySkill;

    @Column(name = "english_level")
    private String englishLevel;

    @Column(name = "cv")
    private String cv;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "internship_id")
    private Long internshipId;

}
