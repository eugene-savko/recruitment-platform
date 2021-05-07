package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserTimeDto;
import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserTime;

import java.util.List;

public interface UserTimeService {

    List<UserTime> splitIntervalIntoSlots (UserTimeDto dto, User user);

    List<UserTimeResponseDto> saveAll (List<UserTime> userTimes);

}
