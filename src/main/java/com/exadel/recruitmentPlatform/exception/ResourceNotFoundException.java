package com.exadel.recruitmentPlatform.exception;


public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -3992055725156492365L;

    public ResourceNotFoundException(String message) {
        super(message);
    }

}


