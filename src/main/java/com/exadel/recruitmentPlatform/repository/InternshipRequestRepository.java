package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InternshipRequestRepository extends JpaRepository<InternshipRequest, Long> {

    InternshipRequest findByUserIdAndInternshipId(Long userId, Long internshipId);

}
