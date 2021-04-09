package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserAndInternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.UserAndInternshipRequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class UserAndInternshipRequestServiceImpl implements UserAndInternshipRequestService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public UserAndInternshipRequestDto parse(UserAndInternshipRequestDto userAndInternshipRequestDto) {

        UserDto userDto = new UserDto(userAndInternshipRequestDto.getFirstName(), userAndInternshipRequestDto.getLastName(),
                userAndInternshipRequestDto.getEmail(), userAndInternshipRequestDto.getCountry(), userAndInternshipRequestDto.getPhone());
        User user = userMapper.toEntity(userDto);
        userRepository.save(user);





        return null;
    }
}
