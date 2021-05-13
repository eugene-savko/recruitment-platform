package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "internship_request", schema = "public")
public class InternshipRequest extends BaseEntity {

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private InternshipRequestStatus status;

    @Column(name = "speciality_id")
    private Long specialityId;

    @Column(name = "english_level")
    private String englishLevel;

    @Column(name = "cv")
    private String cv;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @JoinColumn(name = "internship_id")
    private Long internshipId;

    @Column(name = "country_id")
    private Long countryId;

    @Column(name = "city_id")
    private Long cityId;

}
