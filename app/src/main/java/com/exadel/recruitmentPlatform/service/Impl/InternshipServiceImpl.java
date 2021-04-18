package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.mapper.InternshipMapper;
import com.exadel.recruitmentPlatform.entity.Internship;
import com.exadel.recruitmentPlatform.entity.Speciality;
import com.exadel.recruitmentPlatform.repository.InternshipRepository;
import com.exadel.recruitmentPlatform.repository.SpecialityRepository;
import com.exadel.recruitmentPlatform.service.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InternshipServiceImpl implements InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private SpecialityRepository specialityRepository;

    @Autowired
    private InternshipMapper internshipMapper;

    @Override
    public InternshipDto save(InternshipDto dto) {
        Internship internship = Optional.ofNullable(dto.getId())
                                        .map(item -> update(dto))
                                        .orElseGet(() -> create(dto));
        return internshipMapper.toDto(internship);
    }

    private Internship create(InternshipDto dto) {
        Internship internship = internshipMapper.toEntity(dto);
        Internship saved = internshipRepository.save(internship);
        internship.getSpecialityList().forEach(e-> specialityRepository.save(e));
        return saved;
    }

    private Internship update(InternshipDto dto) {
        Internship internship = internshipRepository.findById(dto.getId()).orElseThrow();
        update(dto, internship);
        Internship saved = internshipRepository.save(internship);
        return saved;
    }

    @Override
    public InternshipDto findById(Long id) {
        return internshipRepository.findById(id).map(internshipMapper::toDto).get();
        // вернхнюю строку заменю на две нижние, когда сольется в мейн ПР "Added own exception class task 28"
        //return internshipRepository.findById(id).map(internshipMapper::toDto)
        //      .orElseThrow(() -> new EntityNotFoundException("Internship with id=" + id + " doesn't exist"));
    }

    public List<InternshipDto> getAllInternships(){
        return listToDto(internshipRepository.findAll());
    }

    public List<InternshipDto> listToDto(List<Internship> internshipList) {
        return internshipList.stream().map(internshipMapper::toDto).collect(Collectors.toList());
    }

    public void update(InternshipDto dto, Internship internship) {
        internship.setName(dto.getName());
        internship.setDescription(dto.getDescription());
        internship.setDeadline(LocalDate.parse(dto.getDeadline()));
        internship.setStartDate(LocalDate.parse(dto.getStartDate()));
        internship.setEndDate(LocalDate.parse(dto.getEndDate()));
        internship.setStatus(dto.getStatus());
        internship.setSpecialityList(dto.getSpecialityList().stream().map(e -> new Speciality(internship, e)).collect(Collectors.toList()));
    }
}
