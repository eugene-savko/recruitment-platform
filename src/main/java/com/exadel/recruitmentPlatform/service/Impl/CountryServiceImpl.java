package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.entity.Country;
import com.exadel.recruitmentPlatform.repository.CountryRepository;
import com.exadel.recruitmentPlatform.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@Transactional
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<Country> getCountries(Set<Long> ids) {
        return countryRepository.findByIdIn(ids);
    }

    @Override
    public Country getCountryById(Long id) {
       return countryRepository.findById(id).get();
    }
}
