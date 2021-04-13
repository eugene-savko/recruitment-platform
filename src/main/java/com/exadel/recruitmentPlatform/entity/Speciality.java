package com.exadel.recruitmentPlatform.entity;

import lombok.*;

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
