package com.exadel.recruitmentPlatform.exceptions;

public class SkillNotFoundException extends RuntimeException {

    public SkillNotFoundException() {
    }

    public SkillNotFoundException(String message) {
        super(message);
    }

    public SkillNotFoundException(Long id) {
        super("Skill with id " + id + " doesn't find");
    }

}

