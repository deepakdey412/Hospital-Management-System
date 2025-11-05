package com.hms_backend.UserMS.jwt;

import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collections;

public class MyUseDetailsService implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            UserDTO userDTO = userService.getUser(email);
            if (userDTO == null) {
                throw new UsernameNotFoundException("User not found with email: " + email);
            }

            // Set authorities based on role
            GrantedAuthority authority = new SimpleGrantedAuthority(userDTO.getRole().name());

            return new CustomUserDetails(
                    userDTO.getId(),
                    userDTO.getName(),
                    userDTO.getPassword(),
                    userDTO.getRole(),
                    userDTO.getName(),
                    userDTO.getEmail(),
                    Collections.singletonList(authority)
            );

        } catch (Exception ex) {
            // You can log the exception here if needed
            ex.printStackTrace();
        }
        return null;

    }
}
