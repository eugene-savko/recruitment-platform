package com.exadel.recruitmentPlatform.controller;

import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.UserCalendarDto;
import com.exadel.recruitmentPlatform.dto.UserDto;
import com.exadel.recruitmentPlatform.dto.UserRequestDto;
import com.exadel.recruitmentPlatform.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping ("/api/users")
public class UserController {

    private final UserService userService;

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

    @PostMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public PageableResponseDto getFilteredUsers(@Valid @RequestBody UserRequestDto userRequestDto) {
        return userService.getFilteredUsers(userRequestDto);
    }

    @GetMapping(params = "internshipId")
    public List<UserCalendarDto> getUsers(@RequestParam("internshipId") Long internshipId) {
        return userService.getUsers(internshipId);
    }

}
