package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InternshipRequestRepository extends JpaRepository<InternshipRequest, Long> {

    InternshipRequest findByUserIdAndInternshipId(Long userId, Long internshipId);

    @Query("select ir.status as status, count (ir.id)  as quantity from InternshipRequest ir group by ir.status")
    List<InternshipRequestStatisticCommonDto> getCommonInternshipStatistic();

    @Query(value = "select i.name, i.status internshipStatus, ir.status internshipRequestStatus, i.deadline, " +
            "count (ir.status) from internship_request ir " +
            "right join internship i on i.id=ir.internship_id " +
            "group by i.id, i.name, ir.status", nativeQuery = true)
    List<InternshipRequestStatisticDto> getInternshipStatistic();

    @Query(value = "select country.name, count (internship_request.internship_id) as quantity from country  " +
            "left join internship_request on internship_request.country_id=country.id " +
            "group by country.name", nativeQuery = true)
    List<InternshipRequestStatisticCountryDto> getInternshipStatisticByCountry();

    @Query(value = "select sp.name, ir.status, count (ir.user_id) as quantity from speciality sp " +
            "left join internship_request ir on sp.id=ir.speciality_id " +
            "group by sp.name, ir.status", nativeQuery = true)
    List<InternshipRequestStatisticSpecialityDto> getInternshipStatisticBySpeciality();


    Integer countAllByInternshipId(Long internshipId);

    Integer countAllByStatusAndInternshipId(InternshipRequestStatus status, Long internshipId);
}
