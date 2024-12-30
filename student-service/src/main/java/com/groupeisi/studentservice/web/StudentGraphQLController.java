package com.groupeisi.studentservice.web;

import com.groupeisi.studentservice.dtos.StudentRequest;
import com.groupeisi.studentservice.entities.Student;
import com.groupeisi.studentservice.mapper.StudentMapper;
import com.groupeisi.studentservice.repositories.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class StudentGraphQLController {

    private StudentRepository studentRepository;
    private StudentMapper studentMapper;

    @QueryMapping
    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }

    @QueryMapping
    public Student studentById(@Argument Long id) {
        Student student = studentRepository.findById(id).orElse(null);
        if(student == null) throw new RuntimeException("Student not found");

        return student;
    }

    @MutationMapping
    public Student saveStudent(@Argument StudentRequest student) {
      Student studentEntity = studentMapper.from(student);

       return studentRepository.save(studentEntity);
    }
}
