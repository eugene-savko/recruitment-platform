package com.exadel.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/internship")
    public String internship(Model model){
        model.addAttribute("title","Internship page");
        return "internship";
    }
}
