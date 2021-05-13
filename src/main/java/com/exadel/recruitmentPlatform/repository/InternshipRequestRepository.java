package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import com.exadel.recruitmentPlatform.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InternshipRequestRepository extends JpaRepository<InternshipRequest, Long> {

    InternshipRequest findByUserIdAndInternshipId(Long userId, Long internshipId);

    @Query(value = "select ir from InternshipRequest ir where ir.user.role = :role")
    Page<InternshipRequest> findByUserRole(Pageable pageable, @Param("role") UserRole role);
}
