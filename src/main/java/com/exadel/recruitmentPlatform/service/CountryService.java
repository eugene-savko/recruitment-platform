package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.Country;

import java.util.List;
import java.util.Set;

public interface CountryService {
    List <Country> getCountries(Set <Long> ids);
    Country getCountry(Long id);
    Long getCountryId(String name);

    Country save(String countryName);
}