package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Internship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InternshipRepository extends JpaRepository<Internship, Long> {

    @Query(nativeQuery = true,
            value = "SELECT * FROM internship i JOIN internship_speciality ints ON i.id = ints.internship_id WHERE ints.speciality_id = :specialityId")
    List<Internship> findInternshipsBySpecialityId(@Param("specialityId") Long specialityId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM internship i JOIN internship_country intc ON i.id = intc.internship_id WHERE intc.country_id = :countryId")
    List<Internship> findInternshipsByCountryId(@Param("countryId") Long countryId);

}
