package com.groupeisi.classe.classroom_service.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class ClassroomRequest {
    private String name; private int capacity;
}
