package com.exadel.recruitmentPlatform.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedList;
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

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "internship_speciality",
            joinColumns = @JoinColumn(name = "internship_id"),
            inverseJoinColumns = @JoinColumn(name = "speciality_id"))
    private List<Speciality> specialities = new LinkedList<>();

    public void addSpeciality(Speciality speciality) {
        specialities.add(speciality);
        speciality.getInternships().add(this);
    }

    public void addSpecialities(List<Speciality> specialities) {
        this.specialities.addAll(specialities);
        specialities.forEach(speciality -> {
            speciality.getInternships().add(this);
        });
    }

    @ManyToMany()
    @JoinTable(name = "internship_skills",
            joinColumns = @JoinColumn(name = "internship_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    List<Skill> skills=new LinkedList<>();

    @ManyToMany()
    @JoinTable(name = "internship_country",
            joinColumns = @JoinColumn(name = "internship_id"),
            inverseJoinColumns = @JoinColumn(name = "country_id"))
    List<Country> countries=new LinkedList<>();

    public void addCountries (List <Country> countries){
        this.countries.addAll(countries);
        countries.forEach(country -> { country.getInternships()
                        .add(this);
        });
    }

    public void addCountry (Country country){
        this.countries.add(country);
        country.getInternships().add(this);
    }

    public void addSkills (List<Skill> skills){
        this.skills.addAll(skills);
        skills.forEach(skill -> skill.getInternships()
                        .add(this));
    }

    public void addSkill (Skill skill){
        this.skills.add(skill);
        skill.getInternships().add(this);
    }
}
