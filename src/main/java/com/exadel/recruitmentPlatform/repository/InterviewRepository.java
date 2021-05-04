package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Interview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterviewRepository extends JpaRepository<Interview, Long> {
}
