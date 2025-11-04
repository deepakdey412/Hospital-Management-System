package com.hms_backend.UserMS.service;

import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void registerUser(UserDTO userDTO) {

    }

    @Override
    public UserDTO loginUser(UserDTO userDTO) {
        return null;
    }

    @Override
    public UserDTO getuserbyid(Long id) {
        return null;
    }

    @Override
    public void updateUser(Long id, UserDTO userDTO) {

    }
}
