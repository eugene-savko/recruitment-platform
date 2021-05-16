package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.City;

public interface CityService {
    Long getCityId(String name);

    City getCity(Long id);

    City save(String cityName);
}
