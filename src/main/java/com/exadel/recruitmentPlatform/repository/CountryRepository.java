package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface CountryRepository extends JpaRepository <Country, Long> {
    Country findByName(String name);
    List <Country> findByIdIn (Set<Long> ids);

}
