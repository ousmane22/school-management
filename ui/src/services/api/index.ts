import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { parseStringPromise } from 'xml2js';
import { handleApiError } from './errorHandling';
import type { Teacher, Student, Subject } from '../../types';

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
  getAll: async () => {
    try {
      const response = await restClient.get<Teacher[]>('/teacher-service/api/teachers');
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await restClient.get<Teacher>(`/teacher-service/api/teachers/${id}`);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  create: async (teacher: Omit<Teacher, 'id'>) => {
    try {
      const response = await restClient.post<Teacher>('/teacher-service/api/teachers', teacher);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  update: async (id: string, teacher: Partial<Teacher>) => {
    try {
      const response = await restClient.put<Teacher>(`/teacher-service/api/teachers/${id}`, teacher);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  delete: async (id: string) => {
    try {
      await restClient.delete(`/teacher-service/api/teachers/${id}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

// Students API (REST)
export const studentsApi = {
  getAll: async () => {
    try {
      const response = await restClient.get<Student[]>('/student-service/api/students');
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await restClient.get<Student>(`/student-service/api/students/${id}`);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  create: async (student: Omit<Student, 'id'>) => {
    try {
      const response = await restClient.post<Student>('/student-service/api/students', student);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  update: async (id: string, student: Partial<Student>) => {
    try {
      const response = await restClient.put<Student>(`/student-service/api/students/${id}`, student);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
  delete: async (id: string) => {
    try {
      await restClient.delete(`/student-service/api/students/${id}`);
    } catch (error) {
      handleApiError(error);
    }
  },
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
    try {
      const response = await soapClient.post('?wsdl', createSoapEnvelope('getAllSubjects', {}));
      const result = await parseStringPromise(response.data);
      return result.subjects as Subject[];
    } catch (error) {
      handleApiError(error);
    }
  },
  
  async create(subject: Omit<Subject, 'id'>) {
    try {
      const response = await soapClient.post(
        '?wsdl',
        createSoapEnvelope('createSubject', subject)
      );
      const result = await parseStringPromise(response.data);
      return result.subject as Subject;
    } catch (error) {
      handleApiError(error);
    }
  },

  async update(id: string, subject: Partial<Subject>) {
    try {
      const response = await soapClient.post(
        '?wsdl',
        createSoapEnvelope('updateSubject', { id, ...subject })
      );
      const result = await parseStringPromise(response.data);
      return result.subject as Subject;
    } catch (error) {
      handleApiError(error);
    }
  },

  async delete(id: string) {
    try {
      await soapClient.post('?wsdl', createSoapEnvelope('deleteSubject', { id }));
    } catch (error) {
      handleApiError(error);
    }
  },
};