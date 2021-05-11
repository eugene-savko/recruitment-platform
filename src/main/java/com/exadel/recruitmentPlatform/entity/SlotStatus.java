package com.exadel.recruitmentPlatform.entity;

import lombok.Getter;

@Getter
public enum SlotStatus {

    FREE("time.interval.free"),
    BOOKED("time.interval.booked"),
    OCCUPIED("time.interval.occupied");

    private String messageKey;

    SlotStatus(String message) {
        this.messageKey = message;
    }
}
