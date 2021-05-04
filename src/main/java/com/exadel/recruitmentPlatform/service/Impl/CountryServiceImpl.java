package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.CountryDto;
import com.exadel.recruitmentPlatform.dto.mapper.CountryMapper;
import com.exadel.recruitmentPlatform.entity.Country;
import com.exadel.recruitmentPlatform.repository.CountryRepository;
import com.exadel.recruitmentPlatform.service.CountryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
@AllArgsConstructor
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;
    private final CountryMapper mapper;

    @Override
    public Long save(String countryName) {
        Country country = Optional.ofNullable(countryRepository
                .findByName(countryName))
                .map(item -> update(countryName))
                .orElseGet(() -> create(countryName));
        countryRepository.save(country);
        return country.getId();
    }

    private Country create(String countryName) {
        Country country = mapper.toEntity(new CountryDto(countryName));
        Country saved = countryRepository.save(country);
        return saved;
    }

    private Country update(String countryName) {
        Country country = countryRepository.findByName(countryName);
        /*.orElseThrow(() -> new EntityNotFoundException("User with id=" + userDto.getId() + " doesn't exist"));*/
        mapper.update(countryName, country);
        Country saved = countryRepository.save(country);
        return saved;
    }

    @Override
    public List<Country> getCountries(Set<Long> ids) {
        return countryRepository.findByIdIn(ids);
    }

    @Override
    public Country getCountryById(Long id) {
        return countryRepository.findById(id).get();
    }

    @Override
    public Long getCountryByName(String name) {
        return countryRepository.findByName(name).getId();
    }
}
