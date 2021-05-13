package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestMapper;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestProfileMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.service.CityService;
import com.exadel.recruitmentPlatform.service.CountryService;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import com.exadel.recruitmentPlatform.service.InterviewService;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import org.springframework.data.domain.Pageable;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class InternshipRequestServiceImpl implements InternshipRequestService {

    private final InternshipRequestRepository internshipRequestRepository;
    private final InternshipRequestMapper internshipRequestMapper;
    private final CountryService countryService;
    private final CityService cityService;
    private final InternshipRequestProfileMapper internshipRequestProfileMapper;
    private final InterviewService interviewService;

    private final UserTimeService userTimeService;

    @Override
    public InternshipRequestDto save(InternshipRequestDto internshipRequestDto) {
        internshipRequestDto.setStatus(InternshipRequestStatus.UNDER_CONSIDERATION);
        internshipRequestDto.getUserDto().setRole(UserRole.INTERN);
        internshipRequestDto.setCountryId(countryService.save(internshipRequestDto.getCountry()).getId());
        internshipRequestDto.setCityId(cityService.save(internshipRequestDto.getCity()).getId());
        InternshipRequest internshipRequest = internshipRequestMapper.toEntity(internshipRequestDto);
        InternshipRequest newRequest = internshipRequestRepository.save(internshipRequest);
        List<UserTime> userTimes = userTimeService.splitIntervalIntoSlots(internshipRequestDto.getUserTime());
        userTimeService.saveUserIntervals(internshipRequest.getUser(), userTimes);
        return internshipRequestMapper.toDto(newRequest);
    }

    @Override
    public InternshipRequestDto get(Long id) {
        return internshipRequestRepository.findById(id).map(internshipRequestMapper::toDto).orElseThrow(() ->
                new EntityNotFoundException("Internship request with id=" + id + " doesn't exist"));
    }

    @Override
    public InternshipRequestProfileDto getInternshipRequestProfile(Long id) {
        InternshipRequest internshipRequest = internshipRequestRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Internship request with id=" + id + " doesn't exist"));
        InternshipRequestProfileDto internshipRequestProfileDto = internshipRequestProfileMapper.toDto(internshipRequest);
        internshipRequestProfileDto.setCountry(countryService.getCountry(internshipRequest.getCountryId()).getName());
        internshipRequestProfileDto.setCity(cityService.getCity(internshipRequest.getCityId()).getName());
        internshipRequestProfileDto.setInterviews(interviewService.getInterviews(internshipRequest.getUser().getId(), internshipRequest.getInternshipId()));
        return internshipRequestProfileDto;
    }

    @Override
    public Page<InternshipRequest> getInternshipRequestByInternUsers(Pageable pageable) {
        return internshipRequestRepository.findByUserRole(pageable, UserRole.INTERN);
    }
}

