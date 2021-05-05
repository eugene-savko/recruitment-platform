package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InformationRequestDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatusDto;
import com.exadel.recruitmentPlatform.dto.SkillShortDto;
import com.exadel.recruitmentPlatform.dto.mapper.SkillShortMapper;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.repository.InternshipSkillRepository;
import com.exadel.recruitmentPlatform.service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class InformationServiceImpl implements InformationService {

    @Autowired
    private InternshipSkillRepository internshipSkillRepository;
    @Autowired
    private SkillShortMapper skillShortMapper;

    @Override
    public InformationRequestDto getInternshipSkillsAndAllUserStatuses(Long internshipId) {
        List<SkillShortDto> skills = internshipSkillRepository.findSkillsByInternshipId(internshipId)
                .stream().map(skillShortMapper::toDto).collect(Collectors.toList());

        List<InternshipRequestStatusDto> internshipRequestStatuses = null;
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
