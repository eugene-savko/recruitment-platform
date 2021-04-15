package com.exadel.recruitmentPlatform.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Getter
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "speciality",schema = "public")
public class Speciality extends BaseEntity{

    @ManyToMany(mappedBy = "specialities")
    private List<Internship> internships;

    @Column(name = "name")
    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Speciality speciality = (Speciality) o;
        return Objects.equals(name, speciality.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
