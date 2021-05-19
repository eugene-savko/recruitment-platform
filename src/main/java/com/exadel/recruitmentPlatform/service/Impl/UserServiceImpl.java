package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.UserDetailDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserRequestDto;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.entity.AuthenticatedUser;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.repository.CountryRepository;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final InternshipRequestService internshipRequestService;
    private final SpecialityRepository specialityRepository;
    private final CountryRepository countryRepository;

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

    public UserDto getAuthenticatedUser(Authentication authentication) {
        AuthenticatedUser user = (AuthenticatedUser) authentication.getPrincipal();
        return findById(user.getId());
    }

    @Override
    public Page<UserDetailDto> getFilteredUsers(UserRequestDto userRequestDto) {



        Page<InternshipRequest> internshipRequests = internshipRequestService
                .getInternshipRequestByFilterParam(userRequestDto);
        List<UserDetailDto> userDetailDtos = new ArrayList();
        for (InternshipRequest internshipRequest : internshipRequests) {
            String specialityName = specialityRepository.findById(internshipRequest.getSpecialityId())
                    .orElseThrow(() -> new EntityNotFoundException("Speciality with id=" + internshipRequest.getSpecialityId() + " doesn't exist")).getName();
            String countryName = countryRepository.findById(internshipRequest.getCountryId())
                    .orElseThrow(() -> new EntityNotFoundException("Country with id=" + internshipRequest.getCountryId() + " doesn't exist")).getName();
            String statusName = internshipRequest.getStatus().name();

            UserDetailDto userDetailDto = new UserDetailDto(internshipRequest.getUser().getFirstName(),
                    internshipRequest.getUser().getLastName(), specialityName, countryName,
                    internshipRequest.getId(), statusName);
            userDetailDtos.add(userDetailDto);
        }
        return new PageImpl<>(userDetailDtos, internshipRequests.getPageable(), internshipRequests.getPageable().getPageSize());
    }

}
