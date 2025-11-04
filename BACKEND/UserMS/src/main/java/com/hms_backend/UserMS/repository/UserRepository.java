package com.hms_backend.UserMS.repository;

import com.hms_backend.UserMS.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
