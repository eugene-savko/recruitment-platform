package com.exadel.recruitmentPlatform.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
public abstract class BaseDto {

    @Setter
    @Getter
    protected Long Id;

}
