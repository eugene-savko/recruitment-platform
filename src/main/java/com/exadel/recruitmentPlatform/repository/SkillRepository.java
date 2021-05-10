package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface SkillRepository extends JpaRepository <Skill, Long> {
    Skill findByName(String name);
    List<Skill> findByIdIn(Set<Long> ids);

    List<Skill> findByInternships_Id(Long internshipId);

}
