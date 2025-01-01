package com.groupeisi.classe.classroom_service.web;

import com.groupeisi.classe.classroom_service.dtos.ClassroomRequest;
import com.groupeisi.classe.classroom_service.entities.Classroom;
import com.groupeisi.classe.classroom_service.services.ClassroomService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class ClassroomGraphQLController {

    private final ClassroomService classroomService;

    @QueryMapping
    public List<Classroom> getAllClassrooms() {
        return classroomService.getAllClassrooms();
    }

    @QueryMapping
    public Classroom classroomById(@Argument Long id) {
        return classroomService.getClassroomById(id)
                .orElseThrow(() -> new RuntimeException("Classroom not found with ID: " + id));
    }

    @MutationMapping
    public Classroom saveClassroom(@Argument ClassroomRequest classroomRequest) {
        return classroomService.saveClassroom(classroomRequest);
    }

    @MutationMapping
    public Classroom updateClassroom(@Argument Long id, @Argument ClassroomRequest classroomRequest) {
        return classroomService.updateClassroom(id, classroomRequest)
                .orElseThrow(() -> new RuntimeException("Classroom not found with ID: " + id));
    }

    @MutationMapping
    public String deleteClassroom(@Argument Long id) {
        if (classroomService.deleteClassroom(id)) {
            return "Classroom with ID " + id + " has been deleted successfully.";
        } else {
            throw new RuntimeException("Classroom not found with ID: " + id);
        }
    }
}
