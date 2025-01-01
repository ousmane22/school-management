package com.groupeisi.studentservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class StudentRequest{
    private String firstname; private String lastname;private String classroomId;
}
