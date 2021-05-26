package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserResponseDto;
import com.exadel.recruitmentPlatform.dto.UserShortDto;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import org.springframework.security.core.Authentication;

import java.util.List;
import java.util.Set;

public interface UserService {

    UserDto save(UserDto dto);

    UserDto findById(Long id);

    User getById(Long id);

    List<User> findByIds(Set<Long> ids);

    UserDto getAuthenticatedUser(Authentication authentication);

    List<UserShortDto> getIdsAndNamesOfUsers(UserRole userRole, Long internshipId);

    List<UserResponseDto> getSpecialistUsers();

}
