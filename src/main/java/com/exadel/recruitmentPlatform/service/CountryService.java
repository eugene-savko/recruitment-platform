package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.Country;

import java.util.List;
import java.util.Set;

public interface CountryService {
    List <Country> getCountries(Set <Long> ids);
    Country getCountryById (Long id);
    Long getCountryByName(String name);

    Long save(String countryName);
}
