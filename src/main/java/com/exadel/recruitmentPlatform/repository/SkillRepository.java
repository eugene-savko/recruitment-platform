package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository <Skill, Long> {
}
