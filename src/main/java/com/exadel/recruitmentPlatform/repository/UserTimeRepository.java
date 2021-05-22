package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.UserTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

import java.util.List;

public interface UserTimeRepository extends JpaRepository<UserTime, Long> {

    @Query(value = "select MIN (ut.start_date_time) from user_time ut " +
            "join internship_request ir on ir.user_id=:userId and ut.user_id=ir.user_id",
            nativeQuery = true)
    LocalDateTime getStartPriorityTime(@Param("userId") Long userId);


    @Query(value = "select MAX (ut.start_date_time) from user_time ut " +
            "join internship_request ir on ir.user_id=:userId and ut.user_id=ir.user_id",
            nativeQuery = true)
    LocalDateTime getEndPriorityTime(@Param("userId") Long userId);

    List<UserTime> findByUserIdIn(List<Long> userIds);

}