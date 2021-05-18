package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;

public interface InternshipRequestStatisticCommonDto {

    Long getQuantity();

    InternshipRequestStatus getStatus();

}
