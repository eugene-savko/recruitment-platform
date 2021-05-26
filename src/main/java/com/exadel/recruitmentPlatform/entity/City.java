package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.LinkedList;
import java.util.List;

@Getter
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "city", schema = "public")
public class City extends BaseEntity {

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "cities")
    private List<Internship> internships = new LinkedList<>();

}
