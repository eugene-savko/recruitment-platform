package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Entity
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "english_level",schema = "public")
public class EnglishLevel extends BaseEntity{
    @Column(name = "name")
    private String name;
}
