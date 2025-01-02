package com.groupeisi.subject.subject_service.web;

import com.groupeisi.subject.subject_service.dtos.SubjectRequest;
import com.groupeisi.subject.subject_service.entities.Subject;
import com.groupeisi.subject.subject_service.mapper.SubjectMapper;
import com.groupeisi.subject.subject_service.repositories.SubjectRepository;
import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@AllArgsConstructor
@WebService(serviceName = "SubjectWS")
public class SubjectSoapService {
    private final SubjectRepository subjectRepository;
    private final SubjectMapper subjectMapper;

    @WebMethod
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    @WebMethod
    public Subject getSubjectById(@WebParam(name = "id") Long id) {
        return subjectRepository.findById(id).orElse(null);
    }

    @WebMethod
    public Subject addSubject(@WebParam(name = "subject") SubjectRequest subjectRequest) {
        Subject subject = subjectMapper.from(subjectRequest);
        return subjectRepository.save(subject);
    }

    @WebMethod
    public Subject updateSubject(@WebParam(name = "id") Long id, @WebParam(name = "subject") SubjectRequest subjectRequest) {
        Optional<Subject> existingSubject = subjectRepository.findById(id);
        if (existingSubject.isPresent()) {
            Subject subject = existingSubject.get();
            subject.setName(subjectRequest.getName());
            subject.setDescription(subjectRequest.getDescription());
            return subjectRepository.save(subject);
        }
        return null;
    }

    @WebMethod
    public boolean deleteSubject(@WebParam(name = "id") Long id) {
        if (subjectRepository.existsById(id)) {
            subjectRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
