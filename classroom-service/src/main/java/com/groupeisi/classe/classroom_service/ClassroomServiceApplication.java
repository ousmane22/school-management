package com.groupeisi.classe.classroom_service;

import com.groupeisi.classe.classroom_service.entities.Classroom;
import com.groupeisi.classe.classroom_service.repositories.ClassroomRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClassroomServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClassroomServiceApplication.class, args);
	}


	@Bean
	public CommandLineRunner loadData(ClassroomRepository classroomRepository) {
		return args -> {
			Classroom classroom1 = Classroom.builder()
					.capacity(30)
					.name("Classroom 101")
					.build();
			Classroom classroom2 = Classroom.builder()
					.capacity(20)
					.name("Lab 201")
					.build();
			Classroom classroom3 = Classroom.builder()
					.capacity(25)
					.name("Classroom 303")
					.build();

			classroomRepository.save(classroom1);
			classroomRepository.save(classroom2);
			classroomRepository.save(classroom3);
		};
	}
}
