package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.UserRole;
import com.exadel.recruitmentPlatform.entity.UserTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserTimeRepository extends JpaRepository<UserTime, Long> {

    @Query(value = "select ut from UserTime ut where " +
            "(ut.user.role = :roleRecruiter or ut.user.role = :roleSpecialist) " +
            "and ut.user.id in :userIds")
    List<UserTime> findByUserRoleAndUserIds(UserRole roleRecruiter, UserRole roleSpecialist, List<Long> userIds);

}
