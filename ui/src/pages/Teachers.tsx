import React from 'react';
import { useQuery } from 'react-query';
import { api } from '../services/api';
import { GraduationCap } from 'lucide-react';

export function Teachers() {
  const { data: teachers, isLoading } = useQuery('teachers', api.getTeachers);

  if (isLoading) {
    return <div className="flex justify-center">Chargement...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Liste des Professeurs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers?.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-12 w-12 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold">{teacher.name}</h2>
                <p className="text-gray-600">{teacher.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}