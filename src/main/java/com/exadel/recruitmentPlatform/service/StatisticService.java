package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticCommonDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticCountryDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticSpecialityDto;

import java.util.List;

public interface StatisticService {

    List<InternshipRequestStatisticCommonDto> getCommonStatistic();

    List<InternshipRequestStatisticDto> getInternshipStatistic();

    List<InternshipRequestStatisticCountryDto> getInternshipRequestCountryStatistic();

    List<InternshipRequestStatisticSpecialityDto> getInternshipRequestSpecialityStatistic();

}
