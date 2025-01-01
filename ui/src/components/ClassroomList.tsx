import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Classroom } from '../types';

interface ClassroomListProps {
  classrooms: Classroom[];
  onEdit: (classroom: Classroom) => void;
  onDelete: (id: string) => void;
}

export function ClassroomList({ classrooms, onEdit, onDelete }: ClassroomListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Capacity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {classrooms.map((classroom) => (
            <tr key={classroom.id}>
              <td className="px-6 py-4 whitespace-nowrap">{classroom.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classroom.capacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(classroom)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this classroom?')) {
                        onDelete(classroom.id);
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