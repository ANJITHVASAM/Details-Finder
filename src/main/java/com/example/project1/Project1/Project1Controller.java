package com.example.project1.Project1;

// import com.example.project1.Project1.Project1Service;

import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

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
    @PostMapping("/numbers")
    public Numbers addData(@RequestBody Numbers data){
        return projectService.addData(data);
    }
    @PutMapping("/numbers/{number}")
    public Numbers putData(@PathVariable String number,@RequestBody Numbers data){
        return projectService.putData(number,data);
    }
    @DeleteMapping("/numbers/{number}")
    public void deleteData(@PathVariable String number){
        projectService.deleteData(number);
    }
}
