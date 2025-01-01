import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Student, Classroom } from '../types';

interface StudentListProps {
  students: Student[];
  classrooms: Classroom[];
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

export function StudentList({ students, classrooms, onEdit, onDelete }: StudentListProps) {
  const getClassroomName = (classroomId: string) => {
    return classrooms.find(c => c.id === classroomId)?.name || 'N/A';
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Classroom
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap">{student.firstname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.lastname}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getClassroomName(student.classroomId)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(student)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this student?')) {
                        onDelete(student.id);
                      }
                    }}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}