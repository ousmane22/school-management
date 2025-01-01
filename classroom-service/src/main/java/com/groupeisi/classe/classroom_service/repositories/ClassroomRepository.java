package com.groupeisi.classe.classroom_service.repositories;

import com.groupeisi.classe.classroom_service.entities.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
}
