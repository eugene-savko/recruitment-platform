package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "skills", schema = "public")
public class Skill extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private SkillType type;

    @Column(name = "subtype")
    private String subtype;

    @ManyToMany(mappedBy = "skills")
    private List<Internship> internships;
}