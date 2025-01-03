import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import type { Student, Teacher, Classroom, Subject } from '../types';

const BASE_URL = 'http://localhost:9999';

export const api = {
  async getStudents(): Promise<Student[]> {
    const response = await axios.get(`${BASE_URL}/student-service/api/students`);
    return response.data;
  },

  async getTeachers(): Promise<Teacher[]> {
    const response = await axios.get(`${BASE_URL}/teacher-service/api/teachers`);
    return response.data;
  },

  async getClassrooms(): Promise<Classroom[]> {
    const response = await axios.get(`${BASE_URL}/student-service/gql/classrooms`);
    return response.data;
  },

 
   async  getSubjects(): Promise<Subject[]> {
    const response = await axios.post(
      `${BASE_URL}/subject-service/services/SubjectService`,
      `<?xml version="1.0" encoding="UTF-8"?>
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                        xmlns:web="http://web.subject_service.subject.groupeisi.com/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:getAllSubjects/>
        </soapenv:Body>
      </soapenv:Envelope>`,
      {
        headers: { 'Content-Type': 'text/xml' },
      }
    );
  
    const result = await parseStringPromise(response.data);
  
    const subjects: Subject[] = result['soap:Envelope']['soap:Body'][0]['ns2:getAllSubjectsResponse'][0]['return'].map(
      (item: any): Subject => ({
        id: item.id[0],
        name: item.name[0],
        description: item.description[0],
        teacherId: item.teacherId[0],
      })
    );

    console.log(subjects);

    return subjects;
  }
};