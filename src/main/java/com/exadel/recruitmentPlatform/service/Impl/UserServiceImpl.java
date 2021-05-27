package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserResponseDto;
import com.exadel.recruitmentPlatform.dto.UserShortDto;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.dto.mapper.UserShortMapper;
import com.exadel.recruitmentPlatform.entity.AuthenticatedUser;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final UserShortMapper userShortMapper;


    @Override
    public UserDto save(final UserDto userDto) {
        User user = Optional.ofNullable(userDto.getId())
                .map(item -> update(userDto))
                .orElseGet(() -> create(userDto));
        return userMapper.toDto(user);
    }

    private User create(final UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        return userRepository.save(user);
    }

    private User update(final UserDto userDto) {
        User user = userRepository.findById(userDto.getId())
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + userDto.getId() + " doesn't exist"));
        update(userDto, user);
        return userRepository.save(user);
    }

    private void update(UserDto userDto, User user) {
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setRole(userDto.getRole());
        user.setSkype(userDto.getSkype());
        user.setPhoto(userDto.getPhoto());
        user.setPhone(userDto.getPhone());
        user.setOtherInformation(userDto.getOtherInformation());
    }

    @Override
    public UserDto findById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + id + " doesn't exist"));
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User with id=" + id + " doesn't exist"));
    }

    @Override
    public List<User> findByIds(Set<Long> ids) {
        return userRepository.findByIdIn(ids);
    }

    public UserDto getAuthenticatedUser(Authentication authentication) {
        AuthenticatedUser user = (AuthenticatedUser) authentication.getPrincipal();
        return findById(user.getId());
    }

    @Override
    public List<UserShortDto> getIdsAndNamesOfUsers(UserRole userRole, Long internshipId) {
        return userShortMapper.toDtos(userRepository.findByRoleAndInternships_Id(userRole, internshipId));
    }

    @Override
    public List<UserResponseDto> getSpecialistUsers() {
        List<User> administrativeUsers = userRepository.findByRoleIn(Set.of(UserRole.RECRUITER, UserRole.SPECIALIST));
        return userMapper.toDtos(administrativeUsers);
    }
}