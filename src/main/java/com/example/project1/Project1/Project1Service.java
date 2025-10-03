package com.example.project1.Project1;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
    public Numbers addData(Numbers data){
        numberJpaRepository.save(data);
        return data;
    }
    public Numbers putData(String number,Numbers data){
        try{
            Optional<Numbers> optionalData=numberJpaRepository.findByMobile(number);
            Numbers existingData=optionalData.get();
            if(data.getGender()!=null) existingData.setGender(data.getGender());
            if(data.getAge()!=0) existingData.setAge(data.getAge());
            if(data.getDetails()!=null) existingData.setDetails(data.getDetails());
            if(data.getFullname()!=null) existingData.setFullname(data.getFullname());
            numberJpaRepository.save(existingData);
            return existingData;
        }
        catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
    public void deleteData(String number){
        try{
            Optional<Numbers> optionalData=numberJpaRepository.findByMobile(number);
            Numbers existingData=optionalData.get();
            int id=existingData.getId();
            numberJpaRepository.deleteById(id);
        }
        catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
