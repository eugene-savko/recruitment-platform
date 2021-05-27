package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;

@Getter
public enum EmailType {

    SENDING_APPLICATION_TEMPLATE("Exadel.html"),
    ASSIGNMENT_INTERVIEW_TEMPLATE("AssignmentInterview.html"),
    ACCEPTED_FOR_INTERNSHIP_TEMPLATE("Accepted.html"),
    DENI_TEMPLATE("Rejected.html");

    private String templateName;

    EmailType(String templateName) {
        this.templateName = templateName;
    }
}
