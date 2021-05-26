package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserResponseDto;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper implements BaseMapper<User, UserDto> {

    @Override
    public User toEntity(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setRole(userDto.getRole());
        user.setSkype(userDto.getSkype());
        user.setPhoto(userDto.getPhoto());
        user.setPhone(userDto.getPhone());
        user.setOtherInformation(userDto.getOtherInformation());
        return user;
    }

    @Override
    public UserDto toDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setRole(user.getRole());
        userDto.setSkype(user.getSkype());
        userDto.setPhoto(user.getPhoto());
        userDto.setPhone(user.getPhone());
        userDto.setOtherInformation(user.getOtherInformation());
        return userDto;
    }

    public void update(UserDto userDto, User user) {
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setRole(userDto.getRole());
        user.setSkype(userDto.getSkype());
        user.setPhoto(userDto.getPhoto());
        user.setPhone(userDto.getPhone());
        user.setOtherInformation(userDto.getOtherInformation());

    }

    public UserResponseDto toResponseDto(User user) {
        UserResponseDto userDto =  new UserResponseDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setRole(user.getRole());
        return userDto;
    }

    public List<UserResponseDto> toDtos(List<User> users) {
        return users.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

}
