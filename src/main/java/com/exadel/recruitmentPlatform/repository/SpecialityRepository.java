package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface SpecialityRepository extends JpaRepository<Speciality, Long> {

    Speciality findByName(String name);
    List<Speciality> findByIdIn(Set<Long> ids);
}
