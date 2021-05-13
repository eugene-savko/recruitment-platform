package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternUsersDto;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.CountryRepository;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import com.exadel.recruitmentPlatform.service.InternUserResponseService;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class InternUserServiceImpl implements InternUserResponseService {

    private final InternshipRequestService internshipRequestService;
    private final SpecialityRepository specialityRepository;
    private final CountryRepository countryRepository;

    @Override
    public Page<InternUsersDto> getInternUsers(Pageable pageable) {
        Page<InternshipRequest> internshipRequests = internshipRequestService.getInternshipRequestByInternUsers(pageable);
        List<InternUsersDto> internUsersDtos = new ArrayList();
        for (InternshipRequest internshipRequest : internshipRequests) {
            String fullName = internshipRequest.getUser().getFirstName() + " " + internshipRequest.getUser().getLastName();
            String specialityName = specialityRepository.findById(internshipRequest.getSpecialityId())
                    .orElseThrow(() -> new EntityNotFoundException("Speciality with id=" + internshipRequest.getSpecialityId() + " doesn't exist")).getName();
            String countryName = countryRepository.findById(internshipRequest.getCountryId())
                    .orElseThrow(() -> new EntityNotFoundException("Country with id=" + internshipRequest.getCountryId() + " doesn't exist")).getName();
            String statusName = internshipRequest.getStatus().name();
            InternUsersDto internUsersDto = new InternUsersDto(fullName, specialityName, countryName,
                    internshipRequest.getId(), statusName);
            internUsersDtos.add(internUsersDto);
        }
        Pageable page = internshipRequests.getPageable();
        return new PageImpl<>(internUsersDtos, page, pageable.getPageSize());
    }
}
