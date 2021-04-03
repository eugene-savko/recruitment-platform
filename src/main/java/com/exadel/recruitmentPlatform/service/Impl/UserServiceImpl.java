package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public UserDto save(UserDto dto) {
        return null;
    }

    @Override
    public UserDto findById(Long id) {
        return userRepository.findById(id).map(userMapper::toDto)
                .orElseThrow(() -> new NullPointerException("User with id=" + id + " doesn't exist"));
    }

    @Override
    public void deleteById(Long id) {

    }

}
