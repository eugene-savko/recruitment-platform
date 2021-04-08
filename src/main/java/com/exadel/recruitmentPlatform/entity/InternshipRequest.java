package com.exadel.recruitmentPlatform.entity;

import javax.persistence.*;

@Entity
@Table(name = "internship_request", schema = "public")
public class InternshipRequest extends BaseEntity{

    @Column(name = "status")
    private String status;

    @Column(name = "primary_skill")
    private String primarySkill;

    @Column(name = "english_level")
    private String englishLevel;

    @Column(name = "cv")
    private String cv;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "internship_id")
    private Internship internship;


    public InternshipRequest() {
    }

    public InternshipRequest(String status, String primarySkill, String englishLevel, String cv, User user, Internship internship) {
        this.status = status;
        this.primarySkill = primarySkill;
        this.englishLevel = englishLevel;
        this.cv = cv;
        this.user = user;
        this.internship = internship;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPrimarySkill() {
        return primarySkill;
    }

    public void setPrimarySkill(String primarySkill) {
        this.primarySkill = primarySkill;
    }

    public String getEnglishLevel() {
        return englishLevel;
    }

    public void setEnglishLevel(String englishLevel) {
        this.englishLevel = englishLevel;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Internship getInternship() {
        return internship;
    }

    public void setInternship(Internship internship) {
        this.internship = internship;
    }
}
