package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticCommonDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticCountryDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticSpecialityDto;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.service.StatisticService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
@Transactional
public class StatisticServiceImpl implements StatisticService {

    private final InternshipRequestRepository statisticRepository;

    @Override
    public List<InternshipRequestStatisticCommonDto> getCommonStatistic() {
        return statisticRepository.getCommonInternshipStatistic();
    }

    @Override
    public List<InternshipRequestStatisticDto> getInternshipStatistic() {
        return statisticRepository.getInternshipStatistic();
    }

    @Override
    public List<InternshipRequestStatisticCountryDto> getInternshipRequestCountryStatistic() {
        return statisticRepository.getInternshipStatisticByCountry();
    }

    @Override
    public List<InternshipRequestStatisticSpecialityDto> getInternshipRequestSpecialityStatistic() {
        return statisticRepository.getInternshipStatisticBySpeciality();
    }

}