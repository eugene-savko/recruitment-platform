package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipRequestStatusMapper;
import com.exadel.recruitmentPlatform.repository.InternshipRequestStatusRepository;
import com.exadel.recruitmentPlatform.service.InternshipRequestStatusService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class InternshipRequestStatusServiceImpl implements InternshipRequestStatusService {

    private InternshipRequestStatusRepository internshipRequestStatusRepository;
    private InternshipRequestStatusMapper internshipRequestStatusMapper;

    @Override
    public List<InternshipRequestStatusDto> getStatuses() {
        return internshipRequestStatusRepository.findAll()
                .stream().map(internshipRequestStatusMapper::toDto)
                .collect(Collectors.toList());
    }
}
