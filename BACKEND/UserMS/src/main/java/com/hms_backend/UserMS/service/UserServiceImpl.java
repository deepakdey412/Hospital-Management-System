package com.hms_backend.UserMS.service;

import com.hms_backend.UserMS.dto.LoginDTO;
import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.entity.User;
import com.hms_backend.UserMS.exception.HmsException;
import com.hms_backend.UserMS.mapper.UserMapper;
import com.hms_backend.UserMS.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    @Override
    public void registerUser(UserDTO userDTO) throws HmsException {
        Optional<User> optionalUser = userRepository.findByEmail(userDTO.getEmail());
        if (optionalUser.isPresent()){
            throw new HmsException("User already available");
        }
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        User newUser = userMapper.toEntity(userDTO);

        userRepository.save(newUser);
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws HmsException {

        User user = userRepository.findByEmail(loginDTO.getEmail())   // Fetch user by email
                .orElseThrow(() -> new HmsException("User not found"));

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) { // Check if password matches
            throw new HmsException("Invalid password");
        }
        user.setPassword(null);
        return userMapper.toDTO(user);
    }


    @Override
    public UserDTO getuserbyid(Long id) throws HmsException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new HmsException("User not found with id: " + id));

        return userMapper.toDTO(user);
    }

    @Override
    public void updateUser(Long id, UserDTO userDTO) {

    }

    @Override
    public UserDTO getUser(String email) {
        User user = userRepository.findByEmail(email)   // Fetch user by email
                .orElseThrow(() -> new HmsException("User not found"));

        return userMapper.toDTO(user);

    }
}
