import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { teachersApi } from '../../services/api';
import { Table } from '../../components/ui/Table';
import { Form } from '../../components/ui/Form';
import { Modal } from '../../components/ui/Modal';
import type { Teacher } from '../../types';

export default function TeacherList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const queryClient = useQueryClient();
  const { data: teachers, isLoading } = useQuery('teachers', teachersApi.getAll);

  const createMutation = useMutation(teachersApi.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('teachers');
      setIsModalOpen(false);
      resetForm();
    }
  });

  const updateMutation = useMutation(
    (teacher: Teacher) => teachersApi.update(teacher.id, teacher),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('teachers');
        setIsModalOpen(false);
        resetForm();
      }
    }
  );

  const deleteMutation = useMutation(teachersApi.delete, {
    onSuccess: () => queryClient.invalidateQueries('teachers')
  });

  const columns = [
    { header: 'Name', accessor: 'name' as const },
    { header: 'Email', accessor: 'email' as const },
  ];

  const handleEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setFormData({
      name: teacher.name,
      email: teacher.email,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (teacher: Teacher) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      await deleteMutation.mutateAsync(teacher.id);
    }
  };

  const handleSubmit = async (data: Record<string, string>) => {
    if (editingTeacher) {
      await updateMutation.mutateAsync({ ...editingTeacher, ...data });
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '' });
    setEditingTeacher(null);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Teacher
        </button>
      </div>

      <Table
        data={teachers?.data || []}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTeacher ? 'Edit Teacher' : 'Add Teacher'}
      >
        <Form
          fields={[
            { name: 'name', label: 'Name', value: formData.name, required: true },
            { name: 'email', label: 'Email', type: 'email', value: formData.email, required: true },
          ]}
          onSubmit={handleSubmit}
          onChange={(name, value) => setFormData(prev => ({ ...prev, [name]: value }))}
          submitLabel={editingTeacher ? 'Update' : 'Create'}
        />
      </Modal>
    </div>
  );
}