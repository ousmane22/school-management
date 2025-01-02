import React from 'react';
import { useQuery } from 'react-query';
import { Users, GraduationCap, BookOpen, School } from 'lucide-react';
import { teachersApi, studentsApi, subjectsApi } from '../services/api';

export default function Dashboard() {
  const { data: teachers } = useQuery('teachers', () => teachersApi.getAll());
  const { data: students } = useQuery('students', () => studentsApi.getAll());
  const { data: subjects } = useQuery('subjects', () => subjectsApi.getAll());

  const stats = [
    {
      name: 'Total Teachers',
      value: teachers?.data?.length || 0,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Total Students',
      value: students?.data?.length || 0,
      icon: GraduationCap,
      color: 'bg-green-500',
    },
    {
      name: 'Total Subjects',
      value: subjects?.length || 0,
      icon: BookOpen,
      color: 'bg-purple-500',
    },
    {
      name: 'Total Classes',
      value: '...',
      icon: School,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}