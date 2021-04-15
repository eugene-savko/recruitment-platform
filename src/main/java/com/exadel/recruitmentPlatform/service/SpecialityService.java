package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.entity.Speciality;

import java.util.List;
import java.util.Set;

public interface SpecialityService {
    List<Speciality> getSpecialties(Set<Long> ids);
    Speciality getSpecialityById(Long id);
}
