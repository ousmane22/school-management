import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { parseStringPromise } from 'xml2js';
import type { Teacher, Student, Subject, Classroom } from '../types';

const BASE_URL = 'http://localhost:9999';

// REST API client
const restClient = axios.create({
  baseURL: BASE_URL,
});

// GraphQL client
export const graphqlClient = new ApolloClient({
  uri: `${BASE_URL}/classroom-service/graphql`,
  cache: new InMemoryCache(),
});

// Teachers API (REST)
export const teachersApi = {
  getAll: () => restClient.get<Teacher[]>('/teacher-service/api/teachers'),
  getById: (id: string) => restClient.get<Teacher>(`/teacher-service/api/teachers/${id}`),
  create: (teacher: Omit<Teacher, 'id'>) => 
    restClient.post<Teacher>('/teacher-service/api/teachers', teacher),
  update: (id: string, teacher: Partial<Teacher>) =>
    restClient.put<Teacher>(`/teacher-service/api/teachers/${id}`, teacher),
  delete: (id: string) => restClient.delete(`/teacher-service/api/teachers/${id}`),
};

// Students API (REST)
export const studentsApi = {
  getAll: () => restClient.get<Student[]>('/student-service/api/students'),
  getById: (id: string) => restClient.get<Student>(`/student-service/api/students/${id}`),
  create: (student: Omit<Student, 'id'>) =>
    restClient.post<Student>('/student-service/api/students', student),
  update: (id: string, student: Partial<Student>) =>
    restClient.put<Student>(`/student-service/api/students/${id}`, student),
  delete: (id: string) => restClient.delete(`/student-service/api/students/${id}`),
};

// Subjects API (SOAP)
const soapClient = axios.create({
  baseURL: `${BASE_URL}/subject-service/services/SubjectService`,
  headers: { 'Content-Type': 'text/xml' },
});

const createSoapEnvelope = (method: string, params: Record<string, any>) => `
  <?xml version="1.0" encoding="UTF-8"?>
  <soapenv:Envelope 
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:sub="http://subject.service.com">
    <soapenv:Header/>
    <soapenv:Body>
      <sub:${method}>
        ${Object.entries(params).map(([key, value]) => `<sub:${key}>${value}</sub:${key}>`).join('')}
      </sub:${method}>
    </soapenv:Body>
  </soapenv:Envelope>
`;

export const subjectsApi = {
  async getAll() {
    const response = await soapClient.post('?wsdl', createSoapEnvelope('getAllSubjects', {}));
    const result = await parseStringPromise(response.data);
    return result.subjects as Subject[];
  },
  
  async create(subject: Omit<Subject, 'id'>) {
    const response = await soapClient.post(
      '?wsdl',
      createSoapEnvelope('createSubject', subject)
    );
    const result = await parseStringPromise(response.data);
    return result.subject as Subject;
  },

  async update(id: string, subject: Partial<Subject>) {
    const response = await soapClient.post(
      '?wsdl',
      createSoapEnvelope('updateSubject', { id, ...subject })
    );
    const result = await parseStringPromise(response.data);
    return result.subject as Subject;
  },

  async delete(id: string) {
    await soapClient.post('?wsdl', createSoapEnvelope('deleteSubject', { id }));
  },
};