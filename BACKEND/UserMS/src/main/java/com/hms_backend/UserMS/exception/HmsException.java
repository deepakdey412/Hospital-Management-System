package com.hms_backend.UserMS.exception;

public class HmsException extends Exception {

    private static final long serialVersionUID = 1L;

    // Constructor that accepts a custom error message
    public HmsException(String message) {
        super(message); // Pass the message to the parent Exception class
    }
}
