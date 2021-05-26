package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestProfileDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestSearchDto;
import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.StatusDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestMapper;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestProfileMapper;
import com.exadel.recruitmentPlatform.dto.mapper.PageableResponseMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.entity.UserTime;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.repository.TimeIntervalRepository;
import com.exadel.recruitmentPlatform.repository.UserTimeRepository;
import com.exadel.recruitmentPlatform.service.CityService;
import com.exadel.recruitmentPlatform.service.CountryService;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import com.exadel.recruitmentPlatform.service.InternshipService;
import com.exadel.recruitmentPlatform.service.InterviewService;
import com.exadel.recruitmentPlatform.service.SpecialityService;
import com.exadel.recruitmentPlatform.service.UserTimeService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.xml.bind.ValidationException;
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
    private final SpecialityService specialityService;
    private final InternshipService internshipService;
    private final UserTimeService userTimeService;
    private final UserTimeRepository userTimeRepository;
    private final TimeIntervalRepository timeIntervalRepository;
    private final PageableResponseMapper pageableResponseMapper;

    @Override
    public InternshipRequestDto save(InternshipRequestDto internshipRequestDto) {
        internshipRequestDto.setStatus(InternshipRequestStatus.UNDER_CONSIDERATION);
        internshipRequestDto.getUserDto().setRole(UserRole.INTERN);
        internshipRequestDto.setCountryId(countryService.save(internshipRequestDto.getCountry()).getId());
        internshipRequestDto.setCityId(cityService.save(internshipRequestDto.getCity()).getId());
        InternshipRequest internshipRequest = internshipRequestMapper.toEntity(internshipRequestDto);
        InternshipRequest newRequest = internshipRequestRepository.save(internshipRequest);
        List<UserTime> userTimes = userTimeService.splitIntervalIntoSlots(
                timeIntervalRepository.findById(internshipRequestDto.getTimeIntervalId())
                        .orElseThrow(() -> new EntityNotFoundException(
                                "Doesn't find TimeInterval slots for this UserId " + internshipRequestDto.getTimeIntervalId())));
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
        internshipRequestProfileDto.setInternship(internshipService.get(internshipRequest.getInternshipId()).getName());
        internshipRequestProfileDto.setSpeciality(
                specialityService.getSpecialityById(internshipRequest.getSpecialityId()).getName());
        internshipRequestProfileDto.setInterviews(
                interviewService.getInterviews(internshipRequest.getUser().getId(), internshipRequest.getInternshipId()));
        internshipRequestProfileDto.setStartPriorityTime(
                userTimeRepository.getStartPriorityTime(internshipRequest.getUser().getId()));
        internshipRequestProfileDto.setEndPriorityTime(
                userTimeRepository.getEndPriorityTime(internshipRequest.getUser().getId()));
        return internshipRequestProfileDto;
    }

    @Override
    public PageableResponseDto getInternshipRequests(InternshipRequestSearchDto internshipRequestSearchDto) {
        Page<InternshipRequest> internshipRequests = internshipRequestRepository
                .findByFilterParam(PageRequest.of(internshipRequestSearchDto.getPageNumber(), internshipRequestSearchDto.getPageSize()),
                internshipRequestSearchDto.getInternshipId(), internshipRequestSearchDto.getSpecialityIds(),
                internshipRequestSearchDto.getStatuses(), "%" + internshipRequestSearchDto.getFullName() + "%");
        return pageableResponseMapper.toDto(internshipRequests.toList(), internshipRequests);
    }

    @Override
    public void updateStatus(StatusDto statusDto) throws ValidationException {
        InternshipRequest internshipRequest = internshipRequestRepository.findById(statusDto.getInternshipRequestId())
                .orElseThrow(() -> new EntityNotFoundException("Internship request with id=" + statusDto.getInternshipRequestId() + " doesn't exist"));
        if (statusDto.getInternshipRequestStatus()==InternshipRequestStatus.REJECTED
                || (statusDto.getInternshipRequestStatus()==InternshipRequestStatus.RECRUITER_INTERVIEW_PASSED
                & internshipRequest.getStatus()==InternshipRequestStatus.RECRUITER_INTERVIEW_FEEDBACK)
                || (statusDto.getInternshipRequestStatus()==InternshipRequestStatus.ACCEPTED
                & internshipRequest.getStatus()==InternshipRequestStatus.TECHNICAL_SPECIALIST_INTERVIEW_PASSED)) {
            internshipRequestMapper.update(internshipRequest, statusDto.getInternshipRequestStatus());
            internshipRequestRepository.save(internshipRequest);
        } else {
            throw new ValidationException("You cannot take this action right now");
        }
    }

}

