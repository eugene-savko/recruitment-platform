package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.CountryDto;
import com.exadel.recruitmentPlatform.entity.Country;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CountryMapper implements BaseMapper<Country, CountryDto> {


    @Override
    public Country toEntity(CountryDto dto) {
        Country country = new Country();
        country.setName(dto.getName());
        country.setId(dto.getId());
        return country;
    }

    @Override
    public CountryDto toDto(Country country) {
        CountryDto countryDto = new CountryDto();
        countryDto.setName(country.getName());
        countryDto.setId(country.getId());
        return countryDto;
    }

    List<CountryDto> toDtos(List<Country> countries) {
        CountryDto countryDto = new CountryDto();
        return countries.stream().map(this::toDto).collect(Collectors.toList());
    }

   /* public void update(String countryName, Country country) {
        country.setName(countryName);

    }*/
}
