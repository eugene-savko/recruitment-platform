package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.UserAndInternshipRequestDto;
import com.exadel.recruitmentPlatform.service.UserAndInternshipRequestService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping ("/users-request")
public class UserAndInternshipRequestController {

    private final UserAndInternshipRequestService userAndInternshipRequestService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void parse(@Valid @RequestBody UserAndInternshipRequestDto userAndInternshipRequestDto) {
        userAndInternshipRequestService.parse(userAndInternshipRequestDto);
    }
}
