package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InternshipRequestRepository extends JpaRepository<InternshipRequest, Long> {

    InternshipRequest findByUserIdAndInternshipId(Long userId, Long internshipId);

    @Query("select i from InternshipRequest i where (:internshipId is null or i.internshipId = :internshipId) " +
            " and ((:specialityIds) is null or i.specialityId in (:specialityIds))" +
            " and ((:statuses) is null or i.status in (:statuses))" +
            " and (:fullName is null or concat(i.user.firstName, ' ', i.user.lastName) like :fullName)" )
    Page<InternshipRequest> findByFilterParam(Pageable pageable, Long internshipId, List<Long> specialityIds,
                                 List<InternshipRequestStatus> statuses, String fullName);
}
