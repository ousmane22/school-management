import React, { useState, useEffect } from 'react';
import { ApolloProvider, useQuery, useMutation } from '@apollo/client';
import { PlusCircle } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { client } from './lib/apollo-client';
import { GET_ALL_CLASSROOMS, SAVE_CLASSROOM, UPDATE_CLASSROOM, DELETE_CLASSROOM } from './graphql/queries';
import { fetchStudents, createStudent, updateStudent, deleteStudent } from './lib/api';
import { Tabs } from './components/Tabs';
import { StudentList } from './components/StudentList';
import { ClassroomList } from './components/ClassroomList';
import { StudentForm } from './components/StudentForm';
import { ClassroomForm } from './components/ClassroomForm';
import { Student, Classroom } from './types';

function Dashboard() {
  const [activeTab, setActiveTab] = useState<'students' | 'classrooms'>('students');
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [editingClassroom, setEditingClassroom] = useState<Classroom | null>(null);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showClassroomForm, setShowClassroomForm] = useState(false);

  const { data: classroomsData } = useQuery(GET_ALL_CLASSROOMS);
  const [saveClassroom] = useMutation(SAVE_CLASSROOM);
  const [updateClassroomMutation] = useMutation(UPDATE_CLASSROOM);
  const [deleteClassroomMutation] = useMutation(DELETE_CLASSROOM);

  const classrooms = classroomsData?.getAllClassrooms || [];

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      toast.error('Failed to load students');
    }
  };

  const handleStudentSubmit = async (studentData: Omit<Student, 'id'> | Student) => {
    try {
      if ('id' in studentData) {
        await updateStudent(studentData as Student);
        toast.success('Student updated successfully');
      } else {
        await createStudent(studentData);
        toast.success('Student created successfully');
      }
      loadStudents();
      setShowStudentForm(false);
      setEditingStudent(null);
    } catch (error) {
      toast.error('Failed to save student');
    }
  };

  const handleStudentDelete = async (id: string) => {
    try {
      await deleteStudent(id);
      toast.success('Student deleted successfully');
      loadStudents();
    } catch (error) {
      toast.error('Failed to delete student');
    }
  };

  const handleClassroomSubmit = async (classroomData: Omit<Classroom, 'id'> | Classroom) => {
    try {
      if ('id' in classroomData) {
        await updateClassroomMutation({
          variables: {
            id: classroomData.id,
            name: classroomData.name,
            capacity: classroomData.capacity,
          },
        });
        toast.success('Classroom updated successfully');
      } else {
        await saveClassroom({
          variables: {
            name: classroomData.name,
            capacity: classroomData.capacity,
          },
        });
        toast.success('Classroom created successfully');
      }
      setShowClassroomForm(false);
      setEditingClassroom(null);
    } catch (error) {
      toast.error('Failed to save classroom');
    }
  };

  const handleClassroomDelete = async (id: string) => {
    try {
      await deleteClassroomMutation({ variables: { id } });
      toast.success('Classroom deleted successfully');
    } catch (error) {
      toast.error('Failed to delete classroom');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Student and Classroom Management
              </h1>
              <button
                onClick={() => {
                  if (activeTab === 'students') {
                    setShowStudentForm(true);
                  } else {
                    setShowClassroomForm(true);
                  }
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <PlusCircle size={20} />
                <span>Add {activeTab === 'students' ? 'Student' : 'Classroom'}</span>
              </button>
            </div>

            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

            {showStudentForm && (
              <div className="mb-6">
                <StudentForm
                  student={editingStudent || undefined}
                  classrooms={classrooms}
                  onSubmit={handleStudentSubmit}
                  onCancel={() => {
                    setShowStudentForm(false);
                    setEditingStudent(null);
                  }}
                />
              </div>
            )}

            {showClassroomForm && (
              <div className="mb-6">
                <ClassroomForm
                  classroom={editingClassroom || undefined}
                  onSubmit={handleClassroomSubmit}
                  onCancel={() => {
                    setShowClassroomForm(false);
                    setEditingClassroom(null);
                  }}
                />
              </div>
            )}

            {activeTab === 'students' ? (
              <StudentList
                students={students}
                classrooms={classrooms}
                onEdit={(student) => {
                  setEditingStudent(student);
                  setShowStudentForm(true);
                }}
                onDelete={handleStudentDelete}
              />
            ) : (
              <ClassroomList
                classrooms={classrooms}
                onEdit={(classroom) => {
                  setEditingClassroom(classroom);
                  setShowClassroomForm(true);
                }}
                onDelete={handleClassroomDelete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;