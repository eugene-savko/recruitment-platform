package com.exadel.recruitmentPlatform.entity;

import org.springframework.security.core.userdetails.User;

public class AuthenticatedUser extends User {

    private Long id;

    public AuthenticatedUser(User user, Long id){
        super(user.getUsername(), user.getPassword(), user.getAuthorities());
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
