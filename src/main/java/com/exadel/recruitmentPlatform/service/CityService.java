package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.City;

public interface CityService {
    Long getCityByName(String name);

    City getCityById(Long id);

    Long save(String cityName);
}
