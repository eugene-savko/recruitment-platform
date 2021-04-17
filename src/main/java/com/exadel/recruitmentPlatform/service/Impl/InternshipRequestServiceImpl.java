package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
@Transactional
public class InternshipRequestServiceImpl implements InternshipRequestService {

    private final InternshipRequestRepository internshipRequestRepository;
    private final InternshipRequestMapper internshipRequestMapper;

    @Override
    public InternshipRequestDto save(InternshipRequestDto internshipRequestDto) {
        internshipRequestDto.setStatus(InternshipRequestStatus.UNDER_CONSIDERATION);
        internshipRequestDto.getUserDto().setRole(UserRole.INTERN);
        InternshipRequest internshipRequest = internshipRequestMapper.toEntity(internshipRequestDto);
        InternshipRequest newRequest = internshipRequestRepository.save(internshipRequest);
        return internshipRequestMapper.toDto(newRequest);
    }

    @Override
    public InternshipRequestDto get(Long id) {
        return internshipRequestRepository.findById(id).map(internshipRequestMapper::toDto).orElseThrow(()->
                new NullPointerException("Internship request with id=" + id + " doesn't exist"));
    }
}

