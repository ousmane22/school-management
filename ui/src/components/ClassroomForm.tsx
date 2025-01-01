import React, { useState, useEffect } from 'react';
import { Classroom } from '../types';

interface ClassroomFormProps {
  classroom?: Classroom;
  onSubmit: (classroom: Omit<Classroom, 'id'> | Classroom) => void;
  onCancel: () => void;
}

export function ClassroomForm({ classroom, onSubmit, onCancel }: ClassroomFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    capacity: '', // Initialize as empty string instead of 0
  });

  useEffect(() => {
    if (classroom) {
      setFormData({
        name: classroom.name,
        capacity: classroom.capacity.toString(), // Convert number to string for input value
      });
    }
  }, [classroom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      capacity: parseInt(formData.capacity) || 0, // Convert back to number, default to 0 if parsing fails
      ...(classroom && { id: classroom.id }),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Capacity</label>
        <input
          type="number"
          value={formData.capacity}
          onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          min="1"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {classroom ? 'Update' : 'Create'} Classroom
        </button>
      </div>
    </form>
  );
}