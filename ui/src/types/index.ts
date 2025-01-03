export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  classroomId: number;
  classroomName: string;
}

export interface Teacher {
  id: number;
  name: string;
  email: string;
}

export interface Classroom {
  id: number;
  name: string;
  capacity: number;
}

export interface Subject {
  id: number;
  name: string;
  description: string;
  teacherId: number;
}