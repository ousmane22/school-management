package com.groupeisi.classe.classroom_service.mapper;


import com.groupeisi.classe.classroom_service.dtos.ClassroomRequest;
import com.groupeisi.classe.classroom_service.entities.Classroom;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ClassroomMapper {
    private ModelMapper modelMapper = new ModelMapper();

    public Classroom from(ClassroomRequest studentRequest) {
        if (studentRequest == null) {
            throw new IllegalArgumentException("StudentRequest cannot be null");
        }
        return modelMapper.map(studentRequest, Classroom.class);
    }
}
