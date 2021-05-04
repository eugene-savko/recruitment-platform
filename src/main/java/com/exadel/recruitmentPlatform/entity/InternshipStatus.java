package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;

@Getter
public enum InternshipStatus {

    RECRUITMENT_IN_PROCESS("recruitment.in-process"),
    RECRUITMENT_IS_OVER("recruitment.is-over"),
    INTERNSHIP_STARTED("internship.started"),
    NO_RECRUITMENT("no.recruitment");

    private String messageKey;

    InternshipStatus(String message) {
        this.messageKey = message;
    }
}