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
