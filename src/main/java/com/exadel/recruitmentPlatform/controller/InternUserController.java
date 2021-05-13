package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.InternUsersDto;
import com.exadel.recruitmentPlatform.service.InternUserResponseService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping ("/users/all")
public class InternUserController {

    private final InternUserResponseService internUserResponseService;

    @GetMapping
    public Page<InternUsersDto> getInternsUser(@PageableDefault Pageable pageable) {
        return internUserResponseService.getInternUsers(pageable);
    }

}
