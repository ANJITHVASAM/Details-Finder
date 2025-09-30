package com.example.project1.Project1;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class Project1Service {
    @Autowired
    private NumberJpaRepository numberJpaRepository;

    public Numbers getDataByNumber(String number){
        Optional<Numbers> optionalData = numberJpaRepository.findByMobile(number);
        if (!optionalData.isPresent()) {    
            return null;
        }
        else{
            return optionalData.get();
        }
    }
    public ArrayList<Numbers> getAllData(){
        return (ArrayList<Numbers>) numberJpaRepository.findAll();
    }
}
