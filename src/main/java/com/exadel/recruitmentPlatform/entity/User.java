package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User extends BaseEntity {

    public User(Long id, String firstName, String lastName, String email,
                UserRole role, String skype, String country, String photo, String phone) {
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.skype = skype;
        this.country = country;
        this.photo = photo;
        this.phone = phone;
    }

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Column(name = "skype")
    private String skype;

    @Column(name = "country")
    private String country;

    @Column(name = "photo")
    private String photo;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

}
