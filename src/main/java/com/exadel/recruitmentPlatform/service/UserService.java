package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.UserCalendarDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserRequestDto;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);
    UserDto getAuthenticatedUser(Authentication authentication);
    PageableResponseDto getFilteredUsers(UserRequestDto userRequestDto);
    List<UserCalendarDto> getUsers(Long internshipId);

}
