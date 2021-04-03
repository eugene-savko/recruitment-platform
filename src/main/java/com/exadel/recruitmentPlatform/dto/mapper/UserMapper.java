package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements BaseMapper<User, UserDto>{

    @Override
    public User toEntity(UserDto userDto) {
        return User.builder()
                .id(userDto.getId())
                .firstName(userDto.getFirstName())
                .lastName(userDto.getLastName())
                .email(userDto.getEmail())
                .role(userDto.getRole())
                .skype(userDto.getSkype())
                .country(userDto.getSkype())
                .photo(userDto.getPhoto())
                .phone(userDto.getPhone())
                .build();
    }

    @Override
    public UserDto toDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole())
                .skype(user.getSkype())
                .country(user.getSkype())
                .photo(user.getPhoto())
                .phone(user.getPhone())
                .build();

    }
}
