package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDetailDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserRequestDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);
    UserDto getAuthenticatedUser(Authentication authentication);
    Page<UserDetailDto> getInternUsers(Pageable pageable);
    Page<UserDto> getFilteredUsers(UserRequestDto userRequestDto);

}
