package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;

@Getter
public enum InternshipRequestStatus {

    UNDER_CONSIDERATION("under.consideration"),
    RECRUITER_INTERVIEW("recruiter.interview"),
    RECRUITER_INTERVIEW_FEEDBACK("recruiter.interview.feedback"),
    TECHNICAL_SPECIALIST_INTERVIEW("technical.specialist.interview"),
    RECRUITER_INTERVIEW_FEEDBACK("recruiter.interview.feedback"),
    RECRUITER_INTERVIEW_PASSED("recruiter.interview.passed"),
    TECHNICAL_SPECIALIST_INTERVIEW_PASSED("technical.specialist.interview.passed"),
    REFUSED("refused"),
    ACCEPTED("accepted"),
    REJECTED("rejected"),
    AWAITING("awaiting");

    private String messageKey;

    InternshipRequestStatus(String message) {
        this.messageKey = message;
    }
}
