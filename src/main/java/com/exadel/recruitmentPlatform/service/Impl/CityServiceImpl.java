package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.CityDto;
import com.exadel.recruitmentPlatform.dto.mapper.CityMapper;
import com.exadel.recruitmentPlatform.entity.City;
import com.exadel.recruitmentPlatform.repository.CityRepository;
import com.exadel.recruitmentPlatform.service.CityService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;
    private final CityMapper cityMapper;

    @Override
    public City save(String cityName) {
        City city = Optional.ofNullable(cityRepository
                .findByName(cityName))
                .orElseGet(() -> create(cityName));
        return city;
    }

    private City create(String cityName) {
        City city = cityMapper.toEntity(new CityDto(cityName));
        City saved = cityRepository.save(city);
        return saved;
    }

    @Override
    public Long getCityId(String name) {
        return cityRepository.findByName(name).getId();
    }

    @Override
    public City getCityById(Long id) {
        return cityRepository.findById(id).get();
    }
}
