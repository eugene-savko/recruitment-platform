package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Internship)) {
            return false;
        }
        return id != null && id.equals(((Internship) o).getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
