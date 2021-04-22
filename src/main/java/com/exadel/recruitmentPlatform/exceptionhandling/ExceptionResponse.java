package com.exadel.recruitmentPlatform.exceptionhandling;

public class ExceptionResponse {

    private String errorMessage;
    private String requestedURI;


    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getRequestedURI() {
        return requestedURI;
    }

    public void callerURL(String requestedURI) {
        this.requestedURI = requestedURI;
    }
}
