package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.dto.InternshipShortDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipMapper;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipShortMapper;
import com.exadel.recruitmentPlatform.entity.*;
import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import com.exadel.recruitmentPlatform.repository.InternshipRepository;
import com.exadel.recruitmentPlatform.repository.InternshipRequestRepository;
import com.exadel.recruitmentPlatform.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@Transactional
public class InternshipServiceImpl implements InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private InternshipRequestRepository internshipRequestRepository;

    @Autowired
    private InternshipMapper internshipMapper;

    @Autowired
    private InternshipShortMapper internshipShortMapper;

    @Autowired
    private SpecialityService specialityService;

    @Autowired
    private CountryService countryService;

    @Autowired
    private SkillService skillService;

    @Autowired
    private CityService cityService;

    @Autowired
    private UserService userService;

    @Override
    public InternshipResponseDto create(InternshipDto dto) {
        List<Speciality> specialities = specialityService.getSpecialties(dto.getSpecialities());
        List<Skill> skills = skillService.getSkills(dto.getSkills());
        List<Country> countries = countryService.save(dto.getCountries());
        List<City> cities = cityService.save(dto.getCities());
        List<User> users = userService.findByIds(dto.getUsers());
        Internship internship = internshipMapper.toEntity(dto);
        internship.setStatus(InternshipStatus.INTERNSHIP_STARTED);

        internship.addSpecialities(specialities);
        internship.addSkills(skills);
        internship.addCountries(countries);
        internship.addCities(cities);
        internship.addUsers(users);

        Internship saved = internshipRepository.save(internship);
        return internshipMapper.toDto(saved);
    }

    @Override
    public InternshipResponseDto get(Long id) {
        return internshipRepository.findById(id).map(internshipMapper::toDto)
                .orElseThrow(() -> new EntityNotFoundException("Internship with id=" + id + " doesn't exist"));
    }

    @Override
    public List<InternshipResponseDto> getInternships() {
        return listToDto(internshipRepository.findAll());
    }

    public List<InternshipResponseDto> listToDto(List<Internship> internshipList) {
        return internshipList.stream().map(internshipMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<InternshipResponseDto> getInternshipsBySpeciality(Long specialityId) {
        return listToDto(internshipRepository.findInternshipsBySpecialityId(specialityId));
    }

    @Override
    public List<InternshipResponseDto> getInternshipsByCountry(Long countryId) {
        return listToDto(internshipRepository.findInternshipsByCountryId(countryId));
    }

    @Override
    public InternshipResponseDto update(InternshipDto dto) {
        Internship internship = internshipRepository.findById(dto.getId())
                .orElseThrow(() ->
                        new EntityNotFoundException("Internship with id=" + dto.getId() + " doesn't exist"));
        updateInternship(dto, internship);
        Internship savedInternship = internshipRepository.save(internship);
        return internshipMapper.toDto(savedInternship);
    }

    @Override
    public List<InternshipShortDto> getIdsAndNamesOfInternships() {
        return listToShortDto(internshipRepository.findAll());
    }

    public List<InternshipShortDto> listToShortDto(List<Internship> internships) {
        return internships.stream().map(internshipShortMapper::toDto).collect(Collectors.toList());
    }

    private void updateInternship(InternshipDto dto, Internship internship) {

        internship.setName(dto.getName());
        internship.setDescription(dto.getDescription());
        internship.setDeadline(dto.getDeadline());
        internship.setStartDate(dto.getStartDate());
        internship.setEndDate(dto.getEndDate());
        internship.setStatus(dto.getStatus());

        mergeCountries(internship, dto.getCountries(), internship.getCountries());
        mergeCities(internship, dto.getCities(), internship.getCities());
        mergeSpecialities(internship, dto.getSpecialities(), internship.getSpecialities());
        mergeUsers(internship, dto.getUsers(), internship.getUsers());
        mergeSkills(internship, dto.getSkills(), internship.getSkills());

    }

    private void mergeCountries(Internship internship, Set<String> sourceCountries, List<Country> targetCountries) {

        Map<String, Country> targetCountriesByName = targetCountries.stream()
                .collect(Collectors.toMap(Country::getName, Function.identity()));

        Set<String> names = new HashSet<>();
        names.addAll(sourceCountries);
        names.addAll(targetCountriesByName.keySet());

        for (String name : names) {
            Country targetCountry = targetCountriesByName.get(name);
            if (sourceCountries.contains(name) && targetCountry == null) {
                Country country = countryService.save(name);
                internship.addCountry(country);
            }
            if (!sourceCountries.contains(name) && targetCountry != null) {
                targetCountries.remove(targetCountry);
            }
        }
    }

    private void mergeCities(Internship internship, Set<String> sourceCities, List<City> targetCities) {

        Map<String, City> targetCityByName = targetCities.stream()
                .collect(Collectors.toMap(City::getName, Function.identity()));

        Set<String> names = new HashSet<>();
        names.addAll(sourceCities);
        names.addAll(targetCityByName.keySet());

        for (String name : names) {
            City targetCity = targetCityByName.get(name);
            if (sourceCities.contains(name) && targetCity == null) {
                City city = cityService.save(name);
                internship.addCity(city);
            }
            if (!sourceCities.contains(name) && targetCity != null) {
                targetCities.remove(targetCity);
            }
        }
    }

    private void mergeUsers(Internship internship, Set<Long> sourceUserIds, List<User> targetUsers) {

        Map<Long, User> targetUsersById = targetUsers.stream()
                .filter(user -> user.getRole() == UserRole.RECRUITER || user.getRole() == UserRole.SPECIALIST)
                .collect(Collectors.toMap(User::getId, Function.identity()));

        Set<Long> ids = new HashSet<>();
        ids.addAll(sourceUserIds);
        ids.addAll(targetUsersById.keySet());

        for (Long id : ids) {
            User targetUser = targetUsersById.get(id);
            if (sourceUserIds.contains(id) && targetUser == null) {
                User user = userService.getById(id);
                internship.addUser(user);
            }
            if (!sourceUserIds.contains(id) && targetUser != null) {
                targetUsers.remove(targetUser);
            }
        }
    }

    private void mergeSpecialities(Internship internship, Set<Long> sourceSpecialityIds, List<Speciality> targetSpecialities) {

        Map<Long, Speciality> targetSpecialityById = targetSpecialities.stream()
                .collect(Collectors.toMap(Speciality::getId, Function.identity()));

        Set<Long> ids = new HashSet<>();
        ids.addAll(sourceSpecialityIds);
        ids.addAll(targetSpecialityById.keySet());

        for (Long id : ids) {
            Speciality targetSpeciality = targetSpecialityById.get(id);
            if (sourceSpecialityIds.contains(id) && targetSpeciality == null) {
                Speciality speciality = specialityService.getSpecialityById(id);
                internship.addSpeciality(speciality);
            }
            if (!sourceSpecialityIds.contains(id) && targetSpecialities != null) {
                targetSpecialities.remove(targetSpeciality);
            }
        }
    }

    private void mergeSkills(Internship internship, Set<Long> sourceSkillIds, List<Skill> targetSkills) {

        Map<Long, Skill> targetSkillsById = targetSkills.stream()
                .collect(Collectors.toMap(Skill::getId, Function.identity()));

        Set<Long> ids = new HashSet<>();
        ids.addAll(sourceSkillIds);
        ids.addAll(targetSkillsById.keySet());

        for (Long id : ids) {
            Skill targetSkill = targetSkillsById.get(id);
            if (sourceSkillIds.contains(id) && targetSkill == null) {
                Skill skill = skillService.getSkill(id);
                internship.addSkill(skill);
            }
            if (!sourceSkillIds.contains(id) && targetSkill != null) {
                targetSkills.remove(targetSkill);
            }
        }
    }

}