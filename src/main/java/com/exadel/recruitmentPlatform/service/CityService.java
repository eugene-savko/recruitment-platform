package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.City;

import java.util.List;
import java.util.Set;

public interface CityService {

    Long getCityId(String name);

    City getCity(Long id);

    City save(String cityName);

    List<City> save(Set<String> cities);

}
