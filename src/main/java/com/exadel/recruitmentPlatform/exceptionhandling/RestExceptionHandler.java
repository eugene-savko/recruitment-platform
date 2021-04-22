package com.exadel.recruitmentPlatform.exceptionhandling;

import com.exadel.recruitmentPlatform.exception.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class RestExceptionHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public
    ResponseEntity<ExceptionResponse> handleResourceNotFound(final EntityNotFoundException exception,
                                             final HttpServletRequest request) {

        ExceptionResponse exceptionResponse = new ExceptionResponse();
        exceptionResponse.setErrorMessage(exception.getMessage());
        exceptionResponse.callerURL(request.getRequestURI());

        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionResponse> handleException(final Exception exception,
                                                            final HttpServletRequest request) {
        ExceptionResponse error = new ExceptionResponse();
        error.setErrorMessage(exception.getMessage());
        error.callerURL(request.getRequestURI());

        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
