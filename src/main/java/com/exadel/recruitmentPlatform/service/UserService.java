package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserShortDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.entity.UserRole;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface UserService {

    UserDto save(UserDto dto);
    UserDto findById(Long id);
    UserDto getAuthenticatedUser(Authentication authentication);
    List<UserShortDto> getIdsAndNamesOfUsers(UserRole userRole, Long internshipId);

}
