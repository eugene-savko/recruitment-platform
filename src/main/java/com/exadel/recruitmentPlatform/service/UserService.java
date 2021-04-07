package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDto;

public interface UserService {
    UserDto create(final UserDto dto);
    UserDto findById(final Long id);

}
