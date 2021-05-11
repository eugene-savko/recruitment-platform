package com.exadel.recruitmentPlatform.service.Impl;

import com.exadel.recruitmentPlatform.entity.AuthenticatedUser;
import com.exadel.recruitmentPlatform.repository.UserRepository;

import lombok.AllArgsConstructor;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        com.exadel.recruitmentPlatform.entity.User userEntity = userRepository.findByEmail(email);
        if (userEntity == null) {
            throw new UsernameNotFoundException(email);
        }

        UserDetails userDetails = User.builder()
                .username(userEntity.getEmail())
                .password(userEntity.getPassword())
                .roles(userEntity.getRole().name())
                .build();
        return new AuthenticatedUser(userDetails, userEntity.getId());
    }
}
