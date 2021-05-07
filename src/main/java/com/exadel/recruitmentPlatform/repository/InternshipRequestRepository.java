package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InternshipRequestRepository extends JpaRepository<InternshipRequest, Long> {

    @Query(value = "select ir from InternshipRequest ir where ir.user.id=:userId and ir.internshipId=:internshipId")
    InternshipRequest findByUserIdAndInternshipId(Long userId, Long internshipId);

}
