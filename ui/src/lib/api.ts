import { Student } from '../types';

const API_URL = 'http://localhost:9999/student-service/api/students';

export const fetchStudents = async (): Promise<Student[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch students');
  return response.json();
};

export const createStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  if (!response.ok) throw new Error('Failed to create student');
  return response.json();
};

export const updateStudent = async (student: Student): Promise<Student> => {
  const response = await fetch(`${API_URL}/${student.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  if (!response.ok) throw new Error('Failed to update student');
  return response.json();
};

export const deleteStudent = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete student');
};