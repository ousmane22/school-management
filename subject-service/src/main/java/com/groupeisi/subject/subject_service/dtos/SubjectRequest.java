package com.groupeisi.subject.subject_service.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class SubjectRequest {
    private String name; private String description;private Long teacherId;
}
