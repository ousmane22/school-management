package com.groupeisi.studentservice.mapper;

import com.groupeisi.studentservice.dtos.StudentRequest;
import com.groupeisi.studentservice.entities.Student;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {
    private ModelMapper modelMapper = new ModelMapper();

    public Student from(StudentRequest studentRequest) {
        if (studentRequest == null) {
            throw new IllegalArgumentException("StudentRequest cannot be null");
        }
        return modelMapper.map(studentRequest, Student.class);
    }
}
