package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Getter
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "country",schema = "public")
public class Country extends BaseEntity{

    @ManyToMany(mappedBy = "countries")
    private List<Internship> internships=new LinkedList<>();

    @Column(name = "name")
    private String name;

}