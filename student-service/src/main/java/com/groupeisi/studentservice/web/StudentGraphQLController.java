package com.groupeisi.studentservice.web;

import com.groupeisi.studentservice.entities.Classroom;
import com.groupeisi.studentservice.services.ClassromGraphQLClientService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
public class StudentGraphQLController {
    private final ClassromGraphQLClientService graphQLClientService;

    public StudentGraphQLController(ClassromGraphQLClientService graphQLClientService) {
        this.graphQLClientService = graphQLClientService;
    }

    @GetMapping("/gql/classrooms")
    public Mono<List<Classroom>> getClassrooms() {
        return graphQLClientService.getClassroomList();
    }

    @GetMapping("/gql/classroom/{id}")
    public Mono<Classroom> getClassroomById(@PathVariable Long id) {
        return graphQLClientService.getClassroomById(id);
    }
}
