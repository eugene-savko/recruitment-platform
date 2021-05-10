package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InformationRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;
import com.exadel.recruitmentPlatform.dto.SkillShortDto;
import com.exadel.recruitmentPlatform.dto.mapper.SkillShortMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.repository.InternshipRepository;
import com.exadel.recruitmentPlatform.repository.SkillRepository;
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

    private final SkillShortMapper skillShortMapper;
    private final SkillRepository skillRepository;

    @Override
    public InformationRequestDto getInternshipsInformation(Long internshipId) {
        List<SkillShortDto> skills = skillRepository.findByInternships_Id(internshipId)
                .stream().map(skillShortMapper::toDto).collect(Collectors.toList());

        List<InternshipRequestStatusDto> internshipRequestStatuses = new ArrayList<>();
        for (InternshipRequestStatus internshipRequestStatus : InternshipRequestStatus.values()) {
            InternshipRequestStatusDto internshipRequestStatusDto = new InternshipRequestStatusDto();
            internshipRequestStatusDto.setStatus(internshipRequestStatus.name());
            internshipRequestStatusDto.setMessageKey(internshipRequestStatus.getMessageKey());
            internshipRequestStatuses.add(internshipRequestStatusDto);
        }

        InformationRequestDto informationRequestDto = new InformationRequestDto();
        informationRequestDto.setSkills(skills);
        informationRequestDto.setStatuses(internshipRequestStatuses);

        return informationRequestDto;
    }

}
