package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InformationRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;
import com.exadel.recruitmentPlatform.dto.SpecialityShortDto;
import com.exadel.recruitmentPlatform.dto.mapper.SpecialityShortMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import com.exadel.recruitmentPlatform.service.InformationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class InformationServiceImpl implements InformationService {

    private final SpecialityShortMapper specialityShortMapper;
    private final SpecialityRepository specialityRepository;

    @Override
    public InformationRequestDto getInternshipsInformation(Long internshipId) {
        List<SpecialityShortDto> specialities = specialityRepository.findByInternships_Id(internshipId)
                .stream().map(specialityShortMapper::toDto).collect(Collectors.toList());

        List<InternshipRequestStatusDto> internshipRequestStatuses = new ArrayList<>();
        for (InternshipRequestStatus internshipRequestStatus : InternshipRequestStatus.values()) {
            InternshipRequestStatusDto internshipRequestStatusDto = new InternshipRequestStatusDto();
            internshipRequestStatusDto.setStatus(internshipRequestStatus.name());
            internshipRequestStatusDto.setMessageKey(internshipRequestStatus.getMessageKey());
            internshipRequestStatuses.add(internshipRequestStatusDto);
        }

        InformationRequestDto informationRequestDto = new InformationRequestDto();
        informationRequestDto.setSpecialities(specialities);
        informationRequestDto.setStatuses(internshipRequestStatuses);

        return informationRequestDto;
    }

}
