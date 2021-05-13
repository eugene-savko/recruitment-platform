package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.UserTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;

public interface UserTimeRepository extends JpaRepository<UserTime, Long> {

    @Query(value = "select MIN (ut.start_date_time) from user_time ut " +
            "join internship_request ir on ir.user_id=ut.user_id", nativeQuery = true)
    LocalDateTime getStartPriorityTime();

    @Query(value = "select MAX (ut.start_date_time) from user_time ut " +
            "join internship_request ir on ir.user_id=ut.user_id", nativeQuery = true)
    LocalDateTime getEndPriorityTime();

}