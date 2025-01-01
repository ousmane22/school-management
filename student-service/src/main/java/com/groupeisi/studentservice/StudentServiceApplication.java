package com.groupeisi.studentservice;

import com.groupeisi.studentservice.entities.Student;
import com.groupeisi.studentservice.repositories.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(StudentRepository studentRepository) {
        return args -> {
            studentRepository.save(Student.builder()
                    .firstname("Ousmane")
                    .lastname("Ndiaye")
                    .classroomId(1L)
                    .build());
            studentRepository.save(Student.builder()
                    .firstname("Laye")
                    .lastname("Ly")
                    .classroomId(2L)
                    .build());
        };
    }

}
