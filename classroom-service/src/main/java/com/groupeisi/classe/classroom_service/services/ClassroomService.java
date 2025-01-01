package com.groupeisi.classe.classroom_service.services;

import com.groupeisi.classe.classroom_service.dtos.ClassroomRequest;
import com.groupeisi.classe.classroom_service.entities.Classroom;
import com.groupeisi.classe.classroom_service.mapper.ClassroomMapper;
import com.groupeisi.classe.classroom_service.repositories.ClassroomRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ClassroomService {
    private final ClassroomRepository classroomRepository;
    private final ClassroomMapper classroomMapper;

    public List<Classroom> getAllClassrooms() {
        return classroomRepository.findAll();
    }

    public Optional<Classroom> getClassroomById(Long id) {
        return classroomRepository.findById(id);
    }

    public Classroom saveClassroom(ClassroomRequest classroomRequest) {
        Classroom classroom = classroomMapper.from(classroomRequest);
        return classroomRepository.save(classroom);
    }

    public Optional<Classroom> updateClassroom(Long id, ClassroomRequest classroomDetails) {
        if (!classroomRepository.existsById(id)) {
            return Optional.empty();
        }
        Classroom classroom = classroomRepository.findById(id).get();
        classroom.setName(classroomDetails.getName());
        classroom.setCapacity(classroomDetails.getCapacity());
        return Optional.of(classroomRepository.save(classroom));
    }

    public boolean deleteClassroom(Long id) {
        if (!classroomRepository.existsById(id)) {
            return false;
        }
        classroomRepository.deleteById(id);
        return true;
    }
}
