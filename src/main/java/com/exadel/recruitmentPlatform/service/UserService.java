package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDto;

public interface UserService {
    UserDto save(final UserDto dto);
    UserDto findById(final Long id);

}
