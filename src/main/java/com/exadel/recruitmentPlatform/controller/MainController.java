package com.exadel.recruitmentPlatform.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Deprecated
@Controller
public class MainController {

    @GetMapping("/internship")
    public String internship(Model model){
        model.addAttribute("title","Internship page");
        return "internship";
    }
}
