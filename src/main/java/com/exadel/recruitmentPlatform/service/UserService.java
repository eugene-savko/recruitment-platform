package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDto;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);

}
