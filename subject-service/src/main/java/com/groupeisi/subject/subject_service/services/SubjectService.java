package com.groupeisi.subject.subject_service.services;

import com.groupeisi.subject.subject_service.dtos.SubjectRequest;
import com.groupeisi.subject.subject_service.entities.Subject;
import com.groupeisi.subject.subject_service.mapper.SubjectMapper;
import com.groupeisi.subject.subject_service.repositories.SubjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SubjectService {
    private final SubjectRepository subjectRepository;
    private final SubjectMapper subjectMapper;

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public Optional<Subject> getSubjectById(Long id) {
        return subjectRepository.findById(id);
    }

    public Subject saveSubject(SubjectRequest subjectRequest) {
        Subject subject = subjectMapper.from(subjectRequest);
        return subjectRepository.save(subject);
    }

    public Optional<Subject> updateSubject(Long id, SubjectRequest subjectDetails) {
        if (!subjectRepository.existsById(id)) {
            return Optional.empty();
        }
        Subject subject = subjectRepository.findById(id).get();
        subject.setName(subjectDetails.getName());
        subject.setDescription(subjectDetails.getDescription());
        return Optional.of(subjectRepository.save(subject));
    }

    public boolean deleteSubject(Long id) {
        if (!subjectRepository.existsById(id)) {
            return false;
        }
        subjectRepository.deleteById(id);
        return true;
    }
}
