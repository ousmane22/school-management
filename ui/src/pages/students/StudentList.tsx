import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { studentsApi } from '../../services/api';
import { Table } from '../../components/ui/Table';
import { Form } from '../../components/ui/Form';
import { Modal } from '../../components/ui/Modal';
import type { Student } from '../../types';

export default function StudentList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    classroomId: ''
  });

  const queryClient = useQueryClient();
  const { data: students, isLoading } = useQuery('students', studentsApi.getAll);

  const createMutation = useMutation(studentsApi.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('students');
      setIsModalOpen(false);
      resetForm();
    }
  });

  const updateMutation = useMutation(
    (student: Student) => studentsApi.update(student.id, student),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('students');
        setIsModalOpen(false);
        resetForm();
      }
    }
  );

  const deleteMutation = useMutation(studentsApi.delete, {
    onSuccess: () => queryClient.invalidateQueries('students')
  });

  const columns = [
    { header: 'First Name', accessor: 'firstname' as const },
    { header: 'Last Name', accessor: 'lastname' as const },
    { header: 'Classroom ID', accessor: 'classroomId' as const }
  ];

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setFormData({
      firstname: student.firstname,
      lastname: student.lastname,
      classroomId: student.classroomId
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (student: Student) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await deleteMutation.mutateAsync(student.id);
    }
  };

  const handleSubmit = async (data: Record<string, string>) => {
    if (editingStudent) {
      await updateMutation.mutateAsync({ ...editingStudent, ...data });
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  const resetForm = () => {
    setFormData({ firstname: '', lastname: '', classroomId: '' });
    setEditingStudent(null);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Students</h1>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Student
        </button>
      </div>

      <Table
        data={students?.data || []}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingStudent ? 'Edit Student' : 'Add Student'}
      >
        <Form
          fields={[
            { name: 'firstname', label: 'First Name', value: formData.firstname, required: true },
            { name: 'lastname', label: 'Last Name', value: formData.lastname, required: true },
            { name: 'classroomId', label: 'Classroom ID', value: formData.classroomId, required: true }
          ]}
          onSubmit={handleSubmit}
          onChange={(name, value) => setFormData(prev => ({ ...prev, [name]: value }))}
          submitLabel={editingStudent ? 'Update' : 'Create'}
        />
      </Modal>
    </div>
  );
}
