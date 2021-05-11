package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.UserTimeResponseDto;
import com.exadel.recruitmentPlatform.entity.UserTime;
import org.springframework.stereotype.Component;

@Component
public class UserTimeMapper implements BaseMapper<UserTime, UserTimeResponseDto> {

    @Override
    public UserTimeResponseDto toDto(UserTime userTime) {

        UserTimeResponseDto userTimeDto = new UserTimeResponseDto();
        userTimeDto.setStartDateTime(userTime.getStartDateTime());
        userTimeDto.setStatus(userTime.getStatus());
        userTimeDto.setStatusMessageKey(userTime.getStatus().getMessageKey());
        userTimeDto.setUser(userTime.getUser());

        return userTimeDto;
    }
}
