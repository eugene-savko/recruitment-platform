package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.service.InternshipRequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class InternshipRequestServiceImpl implements InternshipRequestService {

    private final InternshipRequestRepository internshipRequestRepository;
    private final InternshipRequestMapper internshipRequestMapper;

    @Override
    public InternshipRequestDto save(InternshipRequestDto internshipRequestDto) {
        InternshipRequest internshipRequest = internshipRequestMapper.toEntity(internshipRequestDto);
        InternshipRequest newRequest = internshipRequestRepository.save(internshipRequest);
        return internshipRequestMapper.toDto(newRequest);
    }

//    private InternshipRequest create(InternshipRequestDto internshipRequestDto) {
//        InternshipRequest internshipRequest = internshipRequestMapper.toEntity(internshipRequestDto);
//        InternshipRequest newRequst = internshipRequestRepository.save(internshipRequest);
//        return internshipRequestMapper.toDto(newRequst);;
//    }

    @Override
    public InternshipRequestDto findById(Long id) {
        return internshipRequestRepository.findById(id).map(internshipRequestMapper::toDto).orElseThrow(()-> new IllegalArgumentException("Request not found!"));
    }
}

