package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.UserShortDto;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserShortMapper implements BaseMapper<User, UserShortDto> {

    @Override
    public UserShortDto toDto(User user) {
        UserShortDto userShortDto = new UserShortDto();
        userShortDto.setId(user.getId());
        userShortDto.setFirstName(user.getFirstName());
        userShortDto.setLastName(user.getLastName());
        return userShortDto;
    }

    public List<UserShortDto> toDtos(List<User> users) {
        return users.stream().map(this::toDto).collect(Collectors.toList());
    }
}
