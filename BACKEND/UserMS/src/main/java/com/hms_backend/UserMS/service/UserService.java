package com.hms_backend.UserMS.service;

import com.hms_backend.UserMS.dto.UserDTO;

public interface UserService {
    public void registerUser(UserDTO userDTO);
    public UserDTO loginUser(UserDTO userDTO);
    public UserDTO getuserbyid(Long id);
    public void updateUser(Long id , UserDTO userDTO);
}
