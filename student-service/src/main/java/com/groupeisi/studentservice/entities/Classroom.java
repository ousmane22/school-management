package com.groupeisi.studentservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Classroom {
    private Long id;
    private String name;
    private Integer capacity;
}
