package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "internship", schema = "public")
public class Internship extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "deadline")
    private LocalDate deadline;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private InternshipStatus status;

    @OneToMany(mappedBy="internship")
    private List<Speciality> specialityList;

    @ManyToMany
    @JoinTable(
            name = "internship_skills",
            joinColumns = @JoinColumn(name ="internship_id" ),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    List <Skill> skillList;

}
