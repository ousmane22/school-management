import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { School, Users, GraduationCap, BookOpen, Building } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <School className="h-6 w-6" />
                <span className="font-bold text-xl">École Manager</span>
              </Link>
              
              <div className="flex space-x-4">
                <Link to="/students" className="flex items-center space-x-1 hover:text-indigo-200">
                  <Users className="h-5 w-5" />
                  <span>Étudiants</span>
                </Link>
                <Link to="/teachers" className="flex items-center space-x-1 hover:text-indigo-200">
                  <GraduationCap className="h-5 w-5" />
                  <span>Professeurs</span>
                </Link>
                <Link to="/classrooms" className="flex items-center space-x-1 hover:text-indigo-200">
                  <Building className="h-5 w-5" />
                  <span>Classes</span>
                </Link>
                <Link to="/subjects" className="flex items-center space-x-1 hover:text-indigo-200">
                  <BookOpen className="h-5 w-5" />
                  <span>Matières</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}