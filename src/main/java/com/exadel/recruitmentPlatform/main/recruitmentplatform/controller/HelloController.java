package com.exadel.recruitmentPlatform.main.recruitmentplatform.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@Deprecated
@RestController
public class HelloController {

    @RequestMapping("/greating")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
