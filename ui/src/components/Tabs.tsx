import React from 'react';
import { School, Users, GraduationCap, BookOpen } from 'lucide-react';

interface TabsProps {
  activeTab: 'students' | 'teachers' | 'classrooms' | 'subjects';
  onTabChange: (tab: 'students' | 'teachers' | 'classrooms' | 'subjects') => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex space-x-4 mb-6 border-b border-gray-200">
      <button
        onClick={() => onTabChange('students')}
        className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
          activeTab === 'students'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        <Users size={20} />
        <span>Students</span>
      </button>
      <button
        onClick={() => onTabChange('teachers')}
        className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
          activeTab === 'teachers'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        <GraduationCap size={20} />
        <span>Teachers</span>
      </button>
      <button
        onClick={() => onTabChange('classrooms')}
        className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
          activeTab === 'classrooms'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        <School size={20} />
        <span>Classrooms</span>
      </button>
      <button
        onClick={() => onTabChange('subjects')}
        className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
          activeTab === 'subjects'
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        <BookOpen size={20} />
        <span>Subjects</span>
      </button>
    </div>
  );
}