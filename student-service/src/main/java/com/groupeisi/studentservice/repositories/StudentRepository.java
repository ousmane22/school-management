package com.groupeisi.studentservice.repositories;

import com.groupeisi.studentservice.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
