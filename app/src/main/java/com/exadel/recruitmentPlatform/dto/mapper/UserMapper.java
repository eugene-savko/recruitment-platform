package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.stereotype.Component;

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
        user.setCountry(userDto.getCountry());
        user.setCity(userDto.getCity());
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
        userDto.setCountry(user.getCountry());
        userDto.setCity(user.getCity());
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
        user.setCountry(userDto.getCountry());
        user.setCity(userDto.getCity());
        user.setOtherInformation(userDto.getOtherInformation());

    }

}
