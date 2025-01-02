package com.groupeisi.subject.subject_service;

import com.groupeisi.subject.subject_service.entities.Subject;
import com.groupeisi.subject.subject_service.repositories.SubjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SubjectServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SubjectServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner initializeSubjects(SubjectRepository subjectRepository) {
		return args -> {
			Subject subject1 = new Subject();
			subject1.setName("Programmation Java");
			subject1.setDescription("Introduction à la programmation orientée objet avec Java.");
			subject1.setTeacherId(1L);

			Subject subject2 = new Subject();
			subject2.setName("Base de données");
			subject2.setDescription("Concepts fondamentaux des bases de données relationnelles.");
			subject2.setTeacherId(2L);

			Subject subject3 = new Subject();
			subject3.setName("Développement Web");
			subject3.setDescription("Création de sites web dynamiques avec HTML, CSS, et JavaScript.");
			subject3.setTeacherId(3L);

			subjectRepository.save(subject1);
			subjectRepository.save(subject2);
			subjectRepository.save(subject3);

			System.out.println("Les matières initiales avec teacherId ont été ajoutées.");
		};
	}

}
