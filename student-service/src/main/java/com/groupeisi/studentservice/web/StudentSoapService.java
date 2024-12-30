package com.groupeisi.studentservice.web;

import com.groupeisi.studentservice.dtos.StudentRequest;
import com.groupeisi.studentservice.entities.Student;
import com.groupeisi.studentservice.mapper.StudentMapper;
import com.groupeisi.studentservice.repositories.StudentRepository;
import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Component
@AllArgsConstructor
@WebService(serviceName = "StudentWS")
public class StudentSoapService {
    private StudentRepository studentRepository;
    private StudentMapper studentMapper;

    @WebMethod
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @WebMethod
    @GetMapping("/student/{id}")
    public Student getAllStudent(@WebParam(name = "id") Long id){
        return studentRepository.findById(id).get();
    }

    @WebMethod
    public Student addStudent(@WebParam StudentRequest studentRequest){
       Student student = studentMapper.from(studentRequest);
        return studentRepository.save(student);
    }
}
