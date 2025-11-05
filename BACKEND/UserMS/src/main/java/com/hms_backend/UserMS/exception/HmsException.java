package com.hms_backend.UserMS.exception;

public class HmsException extends RuntimeException {

    public HmsException(String message) {
        super(message);
    }

    public HmsException(String message, Throwable cause) {
        super(message, cause);
    }
}
