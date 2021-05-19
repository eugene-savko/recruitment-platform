package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.InternshipStatus;

import java.time.LocalDate;

public interface InternshipRequestStatisticDto {

    String getName();

    InternshipStatus getInternshipStatus ();

    InternshipRequestStatus getInternshipRequestStatus();

    LocalDate getDeadLine ();

    Long getCount ();

}
