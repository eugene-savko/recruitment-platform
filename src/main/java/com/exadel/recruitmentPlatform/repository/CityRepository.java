package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
    City findByName(String name);
}
