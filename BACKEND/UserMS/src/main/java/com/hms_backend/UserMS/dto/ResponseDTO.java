package com.hms_backend.UserMS.dto;

public class ResponseDTO {

    String message;

    public ResponseDTO() {
    }

    public ResponseDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
