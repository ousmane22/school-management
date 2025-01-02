import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { Table } from '../../components/ui/Table';
import { Form } from '../../components/ui/Form';
import { Modal } from '../../components/ui/Modal';
import type { Classroom } from '../../types';

const GET_CLASSROOMS = gql`
  query GetClassrooms {
    classrooms {
      id
      name
      grade
      teacherId
      students
    }
  }
`;

const CREATE_CLASSROOM = gql`
  mutation CreateClassroom($input: ClassroomInput!) {
    createClassroom(input: $input) {
      id
      name
      grade
      teacherId
      students
    }
  }
`;

const UPDATE_CLASSROOM = gql`
  mutation UpdateClassroom($id: ID!, $input: ClassroomInput!) {
    updateClassroom(id: $id, input: $input) {
      id
      name
      grade
      teacherId
      students
    }
  }
`;

const DELETE_CLASSROOM = gql`
  mutation DeleteClassroom($id: ID!) {
    deleteClassroom(id: $id)
  }
`;

export default function ClassroomList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClassroom, setEditingClassroom] = useState<Classroom | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    teacherId: ''
  });

  const { data, loading } = useQuery(GET_CLASSROOMS);
  const [createClassroom] = useMutation(CREATE_CLASSROOM, {
    refetchQueries: [{ query: GET_CLASSROOMS }]
  });
  const [updateClassroom] = useMutation(UPDATE_CLASSROOM, {
    refetchQueries: [{ query: GET_CLASSROOMS }]
  });
  const [deleteClassroom] = useMutation(DELETE_CLASSROOM, {
    refetchQueries: [{ query: GET_CLASSROOMS }]
  });

  const columns = [
    { header: 'Name', accessor: 'name' as const },
    { header: 'Grade', accessor: 'grade' as const },
    { header: 'Teacher ID', accessor: 'teacherId' as const },
    {
      header: 'Students',
      accessor: 'students' as const,
      render: (students: string[]) => students.length
    }
  ];

  const handleEdit = (classroom: Classroom) => {
    setEditingClassroom(classroom);
    setFormData({
      name: classroom.name,
      grade: classroom.grade,
      teacherId: classroom.teacherId
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (classroom: Classroom) => {
    if (window.confirm('Are you sure you want to delete this classroom?')) {
      await deleteClassroom({ variables: { id: classroom.id } });
    }
  };

  const handleSubmit = async (data: Record<string, string>) => {
    const input = {
      name: data.name,
      grade: data.grade,
      teacherId: data.teacherId,
      students: []
    };

    if (editingClassroom) {
      await updateClassroom({
        variables: { id: editingClassroom.id, input }
      });
    } else {
      await createClassroom({ variables: { input } });
    }
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', grade: '', teacherId: '' });
    setEditingClassroom(null);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Classrooms</h1>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Classroom
        </button>
      </div>

      <Table
        data={data?.classrooms || []}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingClassroom ? 'Edit Classroom' : 'Add Classroom'}
      >
        <Form
          fields={[
            { name: 'name', label: 'Name', value: formData.name, required: true },
            { name: 'grade', label: 'Grade', value: formData.grade, required: true },
            { name: 'teacherId', label: 'Teacher ID', value: formData.teacherId, required: true }
          ]}
          onSubmit={handleSubmit}
          onChange={(name, value) => setFormData(prev => ({ ...prev, [name]: value }))}
          submitLabel={editingClassroom ? 'Update' : 'Create'}
        />
      </Modal>
    </div>
  );
}