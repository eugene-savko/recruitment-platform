package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.InternshipOnAdminPageResponseDto;
import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.service.InternshipService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class InternshipOnAdminPageMapper implements BaseMapper<Internship, InternshipOnAdminPageResponseDto> {

    private final SpecialityMapper specialityMapper;
    private final CityMapper cityMapper;
    private final CountryMapper countryMapper;
    private final InternshipService internshipService;

    @Override
    public InternshipOnAdminPageResponseDto toDto(Internship internship) {
        InternshipOnAdminPageResponseDto dto = new InternshipOnAdminPageResponseDto();
        dto.setId(internship.getId());
        dto.setName(internship.getName());
        dto.setDescription(internship.getDescription());
        dto.setDeadline(internship.getDeadline());
        dto.setStatus(internship.getStatus());
        dto.setStatusMessageKey(internship.getStatus().getMessageKey());
        dto.setSpecialities(specialityMapper.toDtos(internship.getSpecialities()));
        dto.setCountries(countryMapper.toDtos(internship.getCountries()));
        dto.setCities(cityMapper.toDtos(internship.getCities()));
        dto.setApplications(internshipService.getAmountOfInternshipRequests(internship));
        dto.setAcceptedCandidates(internshipService.getAmountOfInternshipRequestsByStatus(internship));
        return dto;
    }
}
