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
