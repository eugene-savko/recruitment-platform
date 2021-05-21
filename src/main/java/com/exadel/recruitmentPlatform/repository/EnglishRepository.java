package com.exadel.recruitmentPlatform.repository;


import com.exadel.recruitmentPlatform.entity.EnglishLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnglishRepository extends JpaRepository<EnglishLevel, Long> {
    EnglishLevel getEnglishLevelByName(String englishLevelName);
}
