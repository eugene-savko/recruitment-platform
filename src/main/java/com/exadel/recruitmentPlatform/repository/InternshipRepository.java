package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Internship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InternshipRepository extends JpaRepository<Internship, Long> {

    @Query(value = "select i from Internship i join i.specialities s where  s.id = :specialityId")
    List<Internship> findInternshipsBySpecialityId(@Param("specialityId") Long specialityId);

    @Query(value = "select i from Internship i join i.countries c where c.id = :countryId")
    List<Internship> findInternshipsByCountryId(@Param("countryId") Long countryId);

}
