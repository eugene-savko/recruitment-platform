package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Interview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterviewRepository extends JpaRepository<Interview, Long> {

    List<Interview> findByToUserIdAndInternshipId(Long toUserId, Long internshipId);
}
