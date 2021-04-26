package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDto;

import java.security.Principal;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);
    UserDto getAuthenticatedUser(Principal principal);

}
