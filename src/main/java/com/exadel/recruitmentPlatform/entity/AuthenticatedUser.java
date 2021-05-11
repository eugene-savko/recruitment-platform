package com.exadel.recruitmentPlatform.entity;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

public class AuthenticatedUser extends User {

    private Long id;

    public AuthenticatedUser(UserDetails userDetails, Long id){
        super(userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
