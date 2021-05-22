package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;

@Getter
public enum UserRole {

    INTERN("intern"),
    RECRUITER("recruiter"),
    SPECIALIST("technical specialist"),
    ADMIN("admin");

    private String messageKey;

    UserRole(String message) {
        this.messageKey = message;
    }
}
