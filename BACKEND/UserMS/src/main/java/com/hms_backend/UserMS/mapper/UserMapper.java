package com.hms_backend.UserMS.mapper;

import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.entity.User;

public class UserMapper {

    // Convert Entity to DTO
    public static UserDTO toDTO(User user) {
        if (user == null) return null;
        return new UserDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }

    // Convert DTO to Entity
    public static User toEntity(UserDTO userDTO) {
        if (userDTO == null) return null;
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setRole(userDTO.getRole());
        return user;
    }
}
