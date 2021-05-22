package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.UserCalendarDto;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserCalendarMapper implements BaseMapper<User, UserCalendarDto> {

    @Override
    public UserCalendarDto toDto(User user) {
        UserCalendarDto userCalendarDto = new UserCalendarDto();
        userCalendarDto.setId(user.getId());
        userCalendarDto.setFirstName(user.getFirstName());
        userCalendarDto.setLastName(user.getLastName());
        return userCalendarDto;
    }

    public List<UserCalendarDto> toDtos(List<User> users) {
        return users.stream().map(this::toDto).collect(Collectors.toList());
    }
}
