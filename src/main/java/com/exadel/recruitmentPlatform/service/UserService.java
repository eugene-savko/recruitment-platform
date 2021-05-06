package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);
    UserDto getAuthenticatedUser(Authentication authentication);
    Page<UserDto> getInternsUser(Pageable pageable);

}
