import React from 'react';

interface Field {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
}

interface FormProps {
  fields: Field[];
  onSubmit: (data: Record<string, string>) => void;
  onChange: (name: string, value: string) => void;
  submitLabel?: string;
}

export function Form({ fields, onSubmit, onChange, submitLabel = 'Save' }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.value
    }), {});
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type || 'text'}
            name={field.name}
            id={field.name}
            required={field.required}
            value={field.value}
            onChange={(e) => onChange(field.name, e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}