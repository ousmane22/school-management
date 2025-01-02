import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { subjectsApi } from '../../services/api';
import { Table } from '../../components/ui/Table';
import { Form } from '../../components/ui/Form';
import { Modal } from '../../components/ui/Modal';
import type { Subject } from '../../types';

export default function SubjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    teacherId: ''
  });

  const queryClient = useQueryClient();
  const { data: subjects, isLoading } = useQuery('subjects', subjectsApi.getAll);

  const createMutation = useMutation(subjectsApi.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('subjects');
      setIsModalOpen(false);
      resetForm();
    }
  });

  const updateMutation = useMutation(
    (subject: Subject) => subjectsApi.update(subject.id, subject),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('subjects');
        setIsModalOpen(false);
        resetForm();
      }
    }
  );

  const deleteMutation = useMutation(subjectsApi.delete, {
    onSuccess: () => queryClient.invalidateQueries('subjects')
  });

  const columns = [
    { header: 'Name', accessor: 'name' as const },
    { header: 'Description', accessor: 'description' as const },
    { header: 'Teacher ID', accessor: 'teacherId' as const }
  ];

  const handleEdit = (subject: Subject) => {
    setEditingSubject(subject);
    setFormData({
      name: subject.name,
      description: subject.description,
      teacherId: subject.teacherId
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (subject: Subject) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
      await deleteMutation.mutateAsync(subject.id);
    }
  };

  const handleSubmit = async (data: Record<string, string>) => {
    if (editingSubject) {
      await updateMutation.mutateAsync({ ...editingSubject, ...data });
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', teacherId: '' });
    setEditingSubject(null);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subjects</h1>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Subject
        </button>
      </div>

      <Table
        data={subjects || []}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingSubject ? 'Edit Subject' : 'Add Subject'}
      >
        <Form
          fields={[
            { name: 'name', label: 'Name', value: formData.name, required: true },
            { name: 'description', label: 'Description', value: formData.description, required: true },
            { name: 'teacherId', label: 'Teacher ID', value: formData.teacherId, required: true }
          ]}
          onSubmit={handleSubmit}
          onChange={(name, value) => setFormData(prev => ({ ...prev, [name]: value }))}
          submitLabel={editingSubject ? 'Update' : 'Create'}
        />
      </Modal>
    </div>
  );
}