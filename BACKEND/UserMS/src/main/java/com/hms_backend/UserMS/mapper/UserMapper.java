package com.hms_backend.UserMS.mapper;

import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    // Convert Entity to DTO
    public UserDTO toDTO(User user) {
        if (user == null) return null;
        return new UserDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPassword(),  // include password
                user.getRole()
        );
    }

    // Convert DTO to Entity
    public User toEntity(UserDTO userDTO) {
        if (userDTO == null) return null;
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());  // include password
        user.setRole(userDTO.getRole());
        return user;
    }
}
