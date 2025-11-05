package com.hms_backend.UserMS.contorller;

import com.hms_backend.UserMS.dto.ResponseDTO;
import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.exception.HmsException;
import com.hms_backend.UserMS.repository.UserRepository;
import com.hms_backend.UserMS.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@Validated
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody @Valid  UserDTO userDTO) throws HmsException {
        userService.registerUser(userDTO);
        return new ResponseEntity<>(new ResponseDTO("Account  Created..!") , HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody @Valid UserDTO userDTO) throws HmsException {
        return new ResponseEntity<>(userService.loginUser(userDTO) , HttpStatus.OK);
    }

}
