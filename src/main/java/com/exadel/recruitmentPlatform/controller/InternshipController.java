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

    @GetMapping(value = "internship/{id}")
    public ResponseEntity<InternshipResponseDto> getInternshipById(@PathVariable Long id){
        return ResponseEntity.ok(internshipService.get(id));
    }

    @PostMapping
    public ResponseEntity<InternshipResponseDto> save(@Valid @RequestBody InternshipDto internshipDto){
        return ResponseEntity.ok(internshipService.create(internshipDto));
    }

    @GetMapping(value = "/speciality/{specialityId}")
    public List<InternshipResponseDto> getInternshipsBySpeciality(@PathVariable Long specialityId){
        if(specialityId-1 == 0){ // speciality=1 is for any speciality
            return internshipService.getInternships();
        }
        return internshipService.getInternshipsBySpeciality(specialityId-1);
    }

}
