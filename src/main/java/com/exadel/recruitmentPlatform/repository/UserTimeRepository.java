package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.UserTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTimeRepository extends JpaRepository<UserTime, Long> {
}
