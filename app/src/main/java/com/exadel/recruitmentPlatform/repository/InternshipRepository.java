package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Internship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InternshipRepository extends JpaRepository<Internship, Long> {
    //todo: Define signature of future method
    // "List<Internship> findInternshipsBySpeciality(Long id_speciality);"
}
