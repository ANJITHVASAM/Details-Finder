package com.example.project1.Project1;

import java.util.*;

public interface Project1Repository {
    Numbers getDataByNumber(String number);
    ArrayList<Numbers> getAllData();
    Numbers addData(Numbers data);
    Numbers putData(String number,Numbers data);
    void deleteData(String number);
}
