package com.groupeisi.studentservice.services;

import com.groupeisi.studentservice.dtos.StudentRequest;
import com.groupeisi.studentservice.entities.Student;
import com.groupeisi.studentservice.mapper.StudentMapper;
import com.groupeisi.studentservice.repositories.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private StudentMapper studentMapper;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public Student saveStudent(StudentRequest studentRequest) {
        Student student = studentMapper.from(studentRequest);
        return studentRepository.save(student);
    }

    public Optional<Student> updateStudent(Long id, StudentRequest studentDetails) {
        if (!studentRepository.existsById(id)) {
            return Optional.empty();
        }
        Student student = studentRepository.findById(id).get();
        student.setFirstname(studentDetails.getFirstname());
        student.setLastname(studentDetails.getLastname());
        return Optional.of(studentRepository.save(student));
    }

    public boolean deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            return false;
        }
        studentRepository.deleteById(id);
        return true;
    }
}
