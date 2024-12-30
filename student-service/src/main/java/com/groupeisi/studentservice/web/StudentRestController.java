package com.groupeisi.studentservice.web;

import com.groupeisi.studentservice.entities.Student;
import com.groupeisi.studentservice.repositories.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class StudentRestController {

    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    public Student getAllStudent(@PathVariable Long id){
        return studentRepository.findById(id).get();
    }

    @PostMapping("/student")
    public Student addStudent(Student student){
        return studentRepository.save(student);
    }
}
