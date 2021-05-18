package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;

public interface InternshipRequestStatisticSpecialityDto {

    String getName();

    InternshipRequestStatus getStatus();

    Long getQuantity();

}
