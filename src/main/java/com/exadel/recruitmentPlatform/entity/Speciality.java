package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

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

}
