package com.example.project1.Project1;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="numbers")
public class Numbers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="fullname")
    private String fullname;
    @Column(name="gender")
    private String gender;
    @Column(name="age")
    private int age;
    @Column(name="mobile")
    private String mobile;
    @Column(name="details")
    private String details;
    
    public Numbers(){}
    public Numbers(int id, String fullname, String gender, int age, String mobile, String details){
        this.id = id;
        this.fullname = fullname;
        this.gender=gender;
        this.age=age;
        this.mobile=mobile;
        this.details=details;
    }
    public int getId() {
        return this.id;
    }  
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return this.fullname;
    }
    public void setName(String fullname) {
        this.fullname = fullname;
    }
    public String getGender() {
        return this.gender;
    }
    public void setGender(String gender){
        this.gender=gender;
    }
    public int getAge(){
        return this.age;
    }
    public void setAge(int age){
        this.age=age;
    }
    public String getNumber(){
        return this.mobile;
    }
    public void setNumber(String mobile){
        this.mobile=mobile;
    }
    public String getAddress(){
        return this.details;
    }
    public void setAddress(String details){
        this.details=details;
    }

}
