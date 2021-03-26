package com.exadel.recruitmentPlatform.main.recruitmentplatform.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
@Deprecated
@RestController
public class HelloController {

    @RequestMapping("/greating")
    public String index() {
        return "Greetings from Spring Boot!";
    }
        //trainy comment
}
