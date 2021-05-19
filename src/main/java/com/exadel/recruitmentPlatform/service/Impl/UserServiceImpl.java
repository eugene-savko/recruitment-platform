package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.UserCandidateDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserRequestDto;
//import com.exadel.recruitmentPlatform.dto.mapper.UserCandidateMapper;
import com.exadel.recruitmentPlatform.dto.mapper.UserMapper;
import com.exadel.recruitmentPlatform.entity.AuthenticatedUser;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.CountryRepository;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import com.exadel.recruitmentPlatform.repository.UserRepository;
import com.exadel.recruitmentPlatform.service.CountryService;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final SpecialityService specialityService;
    private final CountryService countryService;

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
    public PageableResponseDto getFilteredUsers(UserRequestDto userRequestDto) {

        Page<User> users = userRepository.findByFilterParam(PageRequest.of(userRequestDto.getPageNumber(), userRequestDto.getPageSize()),
                userRequestDto.getInternshipId(), userRequestDto.getSpecialityIds(),
                userRequestDto.getStatuses(), "%" + userRequestDto.getFullName() + "%");

        List<UserCandidateDto> userCandidatesDto = new ArrayList<>();
        for (User user : users) {
            InternshipRequest internshipRequest = user.getInternshipRequest().get(0);
            String specialityName = specialityService.getSpecialityById(internshipRequest.getSpecialityId()).getName();
            String countryName = countryService.getCountry(internshipRequest.getCountryId()).getName();
            UserCandidateDto userCandidateDto = new UserCandidateDto(user.getId(), user.getFirstName(), user.getLastName(),
                    specialityName, countryName, internshipRequest.getStatus().name());
            userCandidatesDto.add(userCandidateDto);
        }
        return new PageableResponseDto(userCandidatesDto, users.getSize(), users.getTotalPages());
    }

}
