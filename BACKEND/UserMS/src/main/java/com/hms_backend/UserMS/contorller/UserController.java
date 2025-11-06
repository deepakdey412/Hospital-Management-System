package com.hms_backend.UserMS.contorller;

import com.hms_backend.UserMS.dto.LoginDTO;
import com.hms_backend.UserMS.dto.ResponseDTO;
import com.hms_backend.UserMS.dto.UserDTO;
import com.hms_backend.UserMS.exception.HmsException;
import com.hms_backend.UserMS.jwt.JwtUtil;
import com.hms_backend.UserMS.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@Validated
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final UserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public UserController(UserService userService, UserDetailsService userDetailsService, AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.userService = userService;
        this.userDetailsService = userDetailsService;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody @Valid  UserDTO userDTO) throws HmsException {
        userService.registerUser(userDTO);
        return new ResponseEntity<>(new ResponseDTO("Account  Created..!") , HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginDTO loginDTO) throws HmsException {
        try {
            // Authenticate the user
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginDTO.getEmail(),
                            loginDTO.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            throw new HmsException("Invalid User Credentials");
        }

        // Load user details
        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginDTO.getEmail());

        // Generate JWT token (assuming you have a JwtUtil class)
        final String jwt = jwtUtil.generateToken(userDetails);

        // Return the token in the response
        return ResponseEntity.ok(jwt);
    }


    @GetMapping("/test")
    public ResponseEntity<String> test(){
        return new ResponseEntity<>("Tested.....", HttpStatus.OK);
    }


}
