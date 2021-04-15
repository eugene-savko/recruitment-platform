package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternshipDto;
import com.exadel.recruitmentPlatform.service.Impl.InternshipServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/internships")
public class InternshipController {

    private final InternshipServiceImpl internshipService;

    @GetMapping(value = "/{id}")
    public InternshipDto getInternshipById(@PathVariable Long id){
        return internshipService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public InternshipDto save(@Valid @RequestBody InternshipDto internshipDto){
        return internshipService.save(internshipDto);
    }

    @GetMapping
    public List<InternshipDto> getAllInternships(){
        return internshipService.getAllInternships();
    }

}
