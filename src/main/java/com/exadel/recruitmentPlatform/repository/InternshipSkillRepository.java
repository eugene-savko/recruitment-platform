package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipSkill;
import com.exadel.recruitmentPlatform.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InternshipSkillRepository extends JpaRepository <InternshipSkill, Long> {

//    @Query(value = "select s from Skill s join s.internships i where i.id = :internshipId")
//    List<Skill> findAllByInternshipId(@Param("internshipId") Long internshipId);

    @Query(value = "select i.skills from InternshipSkill i where i.internship =: internshipId")
    List<Skill> findSkillsByInternshipId(@Param("internshipId") Long internshipId);
}
