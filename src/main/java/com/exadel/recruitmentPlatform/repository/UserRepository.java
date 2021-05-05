package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    @Query("select u.id from User u where u.email = :email")
    Long findIdByEmail(@Param("email") String email);

    @Query("select u from User u where u.role =:role")
    Page<User> findUsersByRoleInternship(Pageable pageable, @Param("role") UserRole role);


}
