package com.exadel.recruitmentPlatform.main.recruitmentplatform.service.impl;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.UserDto;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
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
        return userRepository.findById(id).map(userMapper::map).orElseThrow();
    }

    @Override
    public void deleteById(Long id) {

    }
}
