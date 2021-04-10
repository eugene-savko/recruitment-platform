package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.UserAndInternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestMapper;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.UserAndInternshipRequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class UserAndInternshipRequestServiceImpl implements UserAndInternshipRequestService {

    private final InternshipRequestMapper internshipRequestMapper;
    private final InternshipRequestRepository internshipRequestRepository;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public void parse(UserAndInternshipRequestDto userAndInternshipRequestDto) {

        UserDto userDto = new UserDto(userAndInternshipRequestDto.getFirstName(), userAndInternshipRequestDto.getLastName(),
                userAndInternshipRequestDto.getEmail(), userAndInternshipRequestDto.getCountry(),
                userAndInternshipRequestDto.getCity(), userAndInternshipRequestDto.getPhone(), UserRole.INTERN,
                userAndInternshipRequestDto.getOtherInformation());
        User user = userMapper.toEntity(userDto);
        userRepository.save(user);

        InternshipRequestDto internshipRequestDto = new InternshipRequestDto(InternshipRequestStatus.UNDER_CONSIDERATION,
                user, userAndInternshipRequestDto.getInternship(), userAndInternshipRequestDto.getPrimarySkill(),
                userAndInternshipRequestDto.getEnglishLevel(), userAndInternshipRequestDto.getCv());

        InternshipRequest internshipRequest = internshipRequestMapper.toEntity(internshipRequestDto);
        internshipRequestRepository.save(internshipRequest);
    }
}
