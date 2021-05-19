package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.UserCalendarDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping ("/users")
public class UserController {

    private final UserService userService;

    @GetMapping
    public Page<UserDto> getInternsUser(@PageableDefault Pageable pageable) {
        return userService.getInternUsers(pageable);
    }

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserDto> save(@Valid @RequestBody UserDto userDto) {
        return ResponseEntity.ok(userService.save(userDto));
    }

    @GetMapping("/current")
    public UserDto getAuthenticatedUser(Authentication authentication) {
        return userService.getAuthenticatedUser(authentication);
    }

    @GetMapping(params = "internshipId")
    public List<UserCalendarDto> getUsers(@RequestParam("internshipId") Long internshipId) {
        return userService.getUsers(internshipId);
    }

}
