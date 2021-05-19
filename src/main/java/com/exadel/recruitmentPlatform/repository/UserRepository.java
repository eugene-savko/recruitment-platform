package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    Page<User> findByRole(Pageable pageable, @Param("role") UserRole role);

    @Query(value = "select u from Internship i join i.users u where i.id = :internshipId")
    List<User> findUsersByInternshipId(Long internshipId);

    @Query(value = "select u.id from Internship i join i.users u where i.id = :internshipId")
    List<Long> findUserIdsByInternshipId(Long internshipId);
}
