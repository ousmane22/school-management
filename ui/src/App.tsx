import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from './services/api';
import { queryClient } from './services/queryClient';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import TeacherList from './pages/teachers/TeacherList';
import StudentList from './pages/students/StudentList';
import SubjectList from './pages/subjects/SubjectList';
import ClassroomList from './pages/classrooms/ClassroomList';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/teachers" element={<TeacherList />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/subjects" element={<SubjectList />} />
              <Route path="/classrooms" element={<ClassroomList />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;