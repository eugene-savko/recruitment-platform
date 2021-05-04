package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.CityDto;
import com.exadel.recruitmentPlatform.entity.City;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CityMapper implements BaseMapper<City, CityDto> {

    @Override
    public City toEntity(CityDto dto) {
        City city = new City();
        city.setId(dto.getId());
        city.setName(dto.getName());
        return city;
    }

    @Override
    public CityDto toDto(City entity) {
        CityDto dto = new CityDto();
        dto.setName(entity.getName());
        dto.setId(entity.getId());
        return dto;
    }

    public void update(String cityName, City city) {
        city.setName(cityName);

    }
}
