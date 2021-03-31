package com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.mapper;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.UserDto;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper extends BaseMapper<User, UserDto>{

    @Override
    public User map(UserDto userDto) {
        return User.builder()
                .id(userDto.getId())
                .firstName(userDto.getFirstName())
                .lastName(userDto.getLastName())
                .email(userDto.getEmail())
                .role(userDto.getRole())
                .skype(userDto.getSkype())
                .country(userDto.getSkype())
                .photo(userDto.getPhoto())
                .cv(userDto.getCv())
                .phone(userDto.getPhone())
                .englishLevel(userDto.getEnglishLevel())
                .build();
    }

    @Override
    public UserDto map(User user) {
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole())
                .skype(user.getSkype())
                .country(user.getSkype())
                .photo(user.getPhoto())
                .cv(user.getCv())
                .phone(user.getPhone())
                .englishLevel(user.getEnglishLevel())
                .build();

    }
}
