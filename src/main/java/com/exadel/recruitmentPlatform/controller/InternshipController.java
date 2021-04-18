package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.dto.InternshipResponseDto;
import com.exadel.recruitmentPlatform.service.InternshipService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/internships")
public class InternshipController {

    private final InternshipService internshipService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<InternshipResponseDto> getInternshipById(@PathVariable Long id){
        return ResponseEntity.ok(internshipService.get(id));
    }

    @PostMapping
    public ResponseEntity<InternshipResponseDto> save(@Valid @RequestBody InternshipDto internshipDto){
        return ResponseEntity.ok(internshipService.create(internshipDto));
    }

    @GetMapping()
    public List<InternshipResponseDto> getInternships(){
        return internshipService.getInternships();
    }

    @GetMapping(value = "/specialities/{specialityId}")
    public List<InternshipResponseDto> getInternshipsBySpeciality(@PathVariable Long specialityId){
        return internshipService.getInternshipsBySpeciality(specialityId);
    }

}
