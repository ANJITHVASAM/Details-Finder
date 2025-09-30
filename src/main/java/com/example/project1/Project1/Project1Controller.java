package com.example.project1.Project1;

// import com.example.project1.Project1.Project1Service;

import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Project1Controller {
    @Autowired
    private Project1Service projectService;
    
    @GetMapping("/numbers/{number}")
    public Numbers getDataByNumber(@PathVariable String number){
        return projectService.getDataByNumber(number);
    }
    @GetMapping("/numbers")
    public ArrayList<Numbers> getAllData(){
        return projectService.getAllData();
    }
}
