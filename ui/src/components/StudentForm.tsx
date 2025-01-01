import React, { useState, useEffect } from 'react';
import { Student, Classroom } from '../types';

interface StudentFormProps {
  student?: Student;
  classrooms: Classroom[];
  onSubmit: (student: Omit<Student, 'id'> | Student) => void;
  onCancel: () => void;
}

export function StudentForm({ student, classrooms, onSubmit, onCancel }: StudentFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    classroomId: '',
  });

  useEffect(() => {
    if (student) {
      setFormData({
        firstname: student.firstname,
        lastname: student.lastname,
        classroomId: student.classroomId,
      });
    }
  }, [student]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(student ? { ...formData, id: student.id } : formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          value={formData.firstname}
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          value={formData.lastname}
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Classroom</label>
        <select
          value={formData.classroomId}
          onChange={(e) => setFormData({ ...formData, classroomId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select a classroom</option>
          {classrooms.map((classroom) => (
            <option key={classroom.id} value={classroom.id}>
              {classroom.name} (Capacity: {classroom.capacity})
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {student ? 'Update' : 'Create'} Student
        </button>
      </div>
    </form>
  );
}