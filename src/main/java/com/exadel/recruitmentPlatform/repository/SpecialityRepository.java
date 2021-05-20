package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface SpecialityRepository extends JpaRepository<Speciality, Long> {

    Speciality findByName(String name);
    List<Speciality> findByIdIn(Set<Long> ids);

    List<Speciality> findByInternships_Id(@Param("internshipId") Long internshipId);

}
