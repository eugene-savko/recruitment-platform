package com.exadel.recruitmentPlatform.entity;

import liquibase.license.LicenseService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "speciality",schema = "public")
public class Speciality extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "internship_id")
    private Internship internship;

    @Column(name = "name")
    private String name;

}
