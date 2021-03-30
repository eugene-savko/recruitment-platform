package com.exadel.recruitmentPlatform.main.recruitmentplatform.repository;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
