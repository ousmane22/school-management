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

    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    @QueryMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @QueryMapping
    public Student studentById(@Argument Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));
    }

    @MutationMapping
    public Student saveStudent(@Argument StudentRequest studentRequest) {
        Student studentEntity = studentMapper.from(studentRequest);
        return studentRepository.save(studentEntity);
    }

    @MutationMapping
    public Student updateStudent(@Argument Long id, @Argument StudentRequest studentRequest) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));

        existingStudent.setFirstname(studentRequest.getFirstname());
        existingStudent.setLastname(studentRequest.getLastname());

        return studentRepository.save(existingStudent);
    }

    @MutationMapping
    public String deleteStudent(@Argument Long id) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));

        studentRepository.delete(existingStudent);
        return "Student with ID " + id + " has been deleted successfully.";
    }
}
