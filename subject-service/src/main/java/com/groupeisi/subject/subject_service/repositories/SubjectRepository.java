package com.groupeisi.subject.subject_service.repositories;

import com.groupeisi.subject.subject_service.entities.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
