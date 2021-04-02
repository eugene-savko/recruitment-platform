package com.exadel.recruitmentPlatform.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@Entity
@Table(name = "user")
public class User extends BaseEntity {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "role")
    private String role;

    @Column(name = "skype")
    private String skype;

    @Column(name = "country")
    private String country;

    @Column(name = "photo")
    private String photo;

    @Column(name = "cv")
    private String cv;

    @Column(name = "phone")
    private String phone;

    @Column(name = "english_level")
    private String englishLevel;

}
