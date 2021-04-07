package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
