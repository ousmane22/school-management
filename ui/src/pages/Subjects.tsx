import React from 'react';
import { useQuery } from 'react-query';
import { api } from '../services/api';
import { BookOpen } from 'lucide-react';

export function Subjects() {
  const { data: subjects, isLoading, isError, error } = useQuery('subjects', api.getSubjects);

  if (isLoading) {
    return <div className="flex justify-center">Chargement...</div>;
  }

  if (isError) {
    return <div className="flex justify-center text-red-500">Erreur : {String(error)}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Liste des Matières</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects?.map((subject) => (
          <div key={subject.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-12 w-12 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold">{subject.name}</h2>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
