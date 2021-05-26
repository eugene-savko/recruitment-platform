package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.CountryDto;
import com.exadel.recruitmentPlatform.dto.mapper.CountryMapper;
import com.exadel.recruitmentPlatform.entity.Country;
import com.exadel.recruitmentPlatform.repository.CountryRepository;
import com.exadel.recruitmentPlatform.service.CountryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;
    private final CountryMapper countryMapper;

    @Override
    public Country save(String countryName) {
        Country country = Optional.ofNullable(countryRepository
                .findByName(countryName))
                .orElseGet(() -> create(countryName));
        return country;
    }

    @Override
    public List<Country> save(Set<String> countries) {
        return countries.stream().map(this::save).collect(Collectors.toList());
    }

    private Country create(String countryName) {
        Country country = countryMapper.toEntity(new CountryDto(countryName));
        Country saved = countryRepository.save(country);
        return saved;
    }

    @Override
    public Country getCountry(Long id) {
        return countryRepository.findById(id).get();
    }

    @Override
    public Long getCountryId(String name) {
        return countryRepository.findByName(name).getId();
    }

}
