package com.exadel.recruitmentPlatform.Exceptions;

public class SkillNotFoundException extends RuntimeException {
    public SkillNotFoundException() {
    }

    public SkillNotFoundException(String message) {
        super(message);
    }

    public SkillNotFoundException(Long id) {
        super("Skill with id " + id + " doesn't find");
    }

    public SkillNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public SkillNotFoundException(Throwable cause) {
        super(cause);
    }

    public SkillNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
