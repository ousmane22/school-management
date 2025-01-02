export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  classId: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  teacherId: string;
}

export interface Classroom {
  id: string;
  name: string;
  grade: string;
  teacherId: string;
  students: string[];
}