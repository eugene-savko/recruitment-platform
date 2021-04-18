package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InternshipRequestRepository extends JpaRepository<InternshipRequest, Long> {
}
