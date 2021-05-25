package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserRequestDto;
import org.springframework.security.core.Authentication;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);
    UserDto getAuthenticatedUser(Authentication authentication);
    PageableResponseDto getFilteredUsers(UserRequestDto userRequestDto);

}
