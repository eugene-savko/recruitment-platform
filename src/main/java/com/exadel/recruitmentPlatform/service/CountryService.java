package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.Country;

import java.util.List;
import java.util.Set;

public interface CountryService {

    Country getCountry(Long id);

    Long getCountryId(String name);

    Country save(String countryName);

    List<Country> save(Set<String> countryName);

}
