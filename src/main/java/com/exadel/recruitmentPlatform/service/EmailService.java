package com.exadel.recruitmentPlatform.service;

import com.exadel.recruitmentPlatform.dto.InternshipRequestDto;

import java.util.Map;

public interface EmailService {
    void sendMessage(String to, InternshipRequestDto dto);

    void sendEmail(String emailTo, Map<String, Object> model);

    Map<String, Object> placeholder(InternshipRequestDto dto);
}
