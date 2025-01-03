## Lancer avec Docker Compose

Pour exécuter l'application avec Docker Compose, assurez-vous d'avoir [Docker] installé. 

Clonez le dépôt avec `git clone https://github.com/ousmane22/school-management`, 
puis entrez dans le répertoire avec `cd school-management`. 
Lancez les services avec 
   `docker-compose up -d --build`. 

Cette commande démarre tous les conteneurs, y compris **Consul**, utilisé comme service de registre accessible à `http://localhost:8500`. Vous pourrez ensuite accéder aux différentes parties de l'application : 
- API des enseignants : `http://localhost:9999/teacher-service/api/teachers`
- API des élèves : `http://localhost:9999/student-service/api/students`
- Service SOAP des matières : `http://localhost:9999/subject-service/services/SubjectService?wsdl`
- Interface GraphQL des classes : `http://localhost:9999/classroom-service/graphiql`.

Pour arrêter les conteneurs, utilisez `docker-compose down`.


<img width="937" alt="Screenshot 2025-01-02 121026" src="https://github.com/user-attachments/assets/5aaeb5c6-d830-41ca-aa41-f757f83a5356" />

![Screenshot 202<img width="701" alt="Screenshot 2025-01-02 121056" src="https://github.com/user-attachments/assets/d2c686eb-c382-47eb-bc60-293ec336c3a3" />

<img width="878" alt="image" src="https://github.com/user-attachments/assets/6022d0ff-d737-4681-9b12-51f753901d9d" />

<img width="944" alt="image" src="https://github.com/user-attachments/assets/aa3caf5f-604f-4748-9f8f-6af1e17815bf" />
<img width="946" alt="image" src="https://github.com/user-attachments/assets/7b24fbe6-866b-4085-8cb3-64a714ac6381" />
<img width="948" alt="image" src="https://github.com/user-attachments/assets/a6b6dada-4337-4f5c-a9f6-f3dd3a76cc72" />
<img width="950" alt="image" src="https://github.com/user-attachments/assets/25596172-681d-4378-85f6-e336da325530" />
<img width="953" alt="image" src="https://github.com/user-attachments/assets/9b966435-640b-4aca-ae6d-9ed29f5af8d0" />

