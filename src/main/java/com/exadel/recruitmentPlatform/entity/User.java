package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user", schema = "public")
public class User extends BaseEntity {

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

    @Column(name = "photo")
    private String photo;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "other_information")
    private String otherInformation;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "internship_request",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "internship_id"))
    private List<Internship> internships = new LinkedList<>();

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "internship_request",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "speciality_id"))
    private List<Speciality> specialities = new LinkedList<>();

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "internship_request",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "status"))
    private InternshipStatus status;

}
