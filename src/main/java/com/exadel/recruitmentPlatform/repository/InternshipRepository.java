package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InternshipRepository extends JpaRepository<Internship, Long> {

    @Query(value = "select i from Internship i join i.specialities s where  s.id = :specialityId")
    List<Internship> findInternshipsBySpecialityId(@Param("specialityId") Long specialityId);

    @Query(value = "select i from Internship i join i.countries c where c.id = :countryId")
    List<Internship> findInternshipsByCountryId(@Param("countryId") Long countryId);

    @Query(value = "select u from Internship i join i.users u where i.id = :internshipId")
    List<User> findUsersByInternshipId(Long internshipId);

    @Query(value = "select u.id from Internship i join i.users u where i.id = :internshipId")
    List<Long> findUserIdsByInternshipId(Long internshipId);

}
