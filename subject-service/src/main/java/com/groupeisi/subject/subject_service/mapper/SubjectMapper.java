package com.groupeisi.subject.subject_service.mapper;


import com.groupeisi.subject.subject_service.dtos.SubjectRequest;
import com.groupeisi.subject.subject_service.entities.Subject;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class SubjectMapper {
    private ModelMapper modelMapper = new ModelMapper();

    public Subject from(SubjectRequest subjectRequest) {
        if (subjectRequest == null) {
            throw new IllegalArgumentException("SubjectMapper cannot be null");
        }
        return modelMapper.map(subjectRequest, Subject.class);
    }
}
