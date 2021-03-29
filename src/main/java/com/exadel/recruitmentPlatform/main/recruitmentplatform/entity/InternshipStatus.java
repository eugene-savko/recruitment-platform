package com.exadel.recruitmentPlatform.main.recruitmentplatform.entity;

public enum InternshipStatus {

    RECRUITMENT_IN_PROCESS("идёт набор"),
    RECRUITMENT_IS_OVER("набор окончен"),
    INTERNSHIP_STARTED("стажировка стартовала"),
    NO_RECRUITMENT("нет набора");

    String statusName;

    InternshipStatus(String statusName) {
        this.statusName = statusName;
    }

    public String getStatusName() {
        return statusName;
    }
}
