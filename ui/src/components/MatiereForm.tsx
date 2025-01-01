import React, { useState, useEffect } from 'react';
import { Matiere, Professeur } from '../types';

interface MatiereFormProps {
  matiere?: Matiere;
  professeurs: Professeur[];
  onSubmit: (matiere: Omit<Matiere, 'id'> | Matiere) => void;
  onCancel: () => void;
}

export function MatiereForm({ matiere, professeurs, onSubmit, onCancel }: MatiereFormProps) {
  const [formData, setFormData] = useState({
    nom: '',
    code: '',
    description: '',
    professeurId: '',
  });

  useEffect(() => {
    if (matiere) {
      setFormData({
        nom: matiere.nom,
        code: matiere.code,
        description: matiere.description,
        professeurId: matiere.professeurId,
      });
    }
  }, [matiere]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(matiere ? { ...formData, id: matiere.id } : formData);
    }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Code</label>
        <input
          type="text"
          value={formData.code}
          onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Professeur</label>
        <select
          value={formData.professeurId}
          onChange={(e) => setFormData({ ...formData, professeurId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Sélectionner un professeur</option>
          {professeurs.map((professeur) => (
            <option key={professeur.id} value={professeur.id}>
              {professeur.prenom} {professeur.nom}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {matiere ? 'Modifier' : 'Créer'} la matière
        </button>
      </div>
    </form>
  );
}