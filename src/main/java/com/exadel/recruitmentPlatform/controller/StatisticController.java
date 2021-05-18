package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticCommonDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticCountryDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticDto;
import com.exadel.recruitmentPlatform.dto.InternshipRequestStatisticSpecialityDto;
import com.exadel.recruitmentPlatform.service.StatisticService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/statistic")
public class StatisticController {

    private final StatisticService statisticService;

    @GetMapping
    public List<InternshipRequestStatisticCommonDto> getCommonStat() {
        List<InternshipRequestStatisticCommonDto> commonInternshipStatistic = statisticService.getCommonStatistic();
        return commonInternshipStatistic;
    }

    @GetMapping("/internship")
    public List<InternshipRequestStatisticDto> getStatisticByInternship() {
        return statisticService.getInternshipStatistic();
    }

    @GetMapping("/сountry")
    public List<InternshipRequestStatisticCountryDto> getStatisticByCountry() {
        return statisticService.getInternshipRequestCountryStatistic();
    }

    @GetMapping("/speciality")
    public List<InternshipRequestStatisticSpecialityDto> getStatisticBySpeciality() {
        return statisticService.getInternshipRequestSpecialityStatistic();
    }

}
