package com.groupeisi.studentservice.services;

import com.groupeisi.studentservice.entities.Classroom;
import org.springframework.graphql.client.HttpGraphQlClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import java.util.List;

@Service
public class ClassromGraphQLClientService {

    private final HttpGraphQlClient graphQlClient;

    public ClassromGraphQLClientService() {
        this.graphQlClient = HttpGraphQlClient.builder()
                .url("http://localhost:9999/classroom-service/graphql")
                .build();
    }

    public Mono<List<Classroom>> getClassroomList() {
        String query = """
                query {
                    getAllClassrooms {
                        id,
                        name,
                        capacity
                    }
                }
                """;

        return graphQlClient.document(query)
                .retrieve("getAllClassrooms")
                .toEntityList(Classroom.class);
    }

    public Mono<Classroom> getClassroomById(Long id) {
        String query = """
                query($id: Int) {
                    classroomById(id: $id) {
                        id,
                        name,
                        capacity
                    }
                }
                """;

        return graphQlClient.document(query)
                .variable("id", id)
                .retrieve("classroomById")
                .toEntity(Classroom.class);
    }
}
