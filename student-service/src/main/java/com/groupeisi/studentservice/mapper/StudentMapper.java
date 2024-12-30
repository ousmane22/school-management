package com.groupeisi.studentservice.mapper;

import com.groupeisi.studentservice.dtos.StudentRequest;
import com.groupeisi.studentservice.entities.Student;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {
    private ModelMapper modelMapper = new ModelMapper();

    public Student from(StudentRequest studentRequest) {
//       Student student = new Student();
//      student.setFirstname(studentRequest.firstname());
//      student.setLastname(studentRequest.lastname());
        return modelMapper.map(studentRequest, Student.class);
    }
}
