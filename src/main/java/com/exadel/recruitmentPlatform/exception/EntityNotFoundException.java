package com.exadel.recruitmentPlatform.exception;

public class EntityNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1515502198795323189L;

    public EntityNotFoundException(String message) {
        super(message);
    }

}

