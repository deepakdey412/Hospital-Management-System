package com.hms_backend.UserMS.service;

import com.hms_backend.UserMS.dto.LoginDTO;
import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.exception.HmsException;

public interface UserService {
    public void registerUser(UserDTO userDTO) throws HmsException;
    public UserDTO loginUser(LoginDTO loginDTO) throws HmsException;
    public UserDTO getuserbyid(Long id) throws HmsException;
    public void updateUser(Long id , UserDTO userDTO);
}
