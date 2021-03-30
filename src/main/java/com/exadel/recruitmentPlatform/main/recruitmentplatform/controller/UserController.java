package com.exadel.recruitmentPlatform.main.recruitmentplatform.controller;

import com.exadel.recruitmentPlatform.main.recruitmentplatform.dto.UserDto;
import com.exadel.recruitmentPlatform.main.recruitmentplatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping ("/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}