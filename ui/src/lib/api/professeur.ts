import { Professeur } from '../../types';

const API_URL = 'http://localhost:9999/professeur-service/api/professeurs';

export const fetchProfesseurs = async (): Promise<Professeur[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Échec du chargement des professeurs');
  return response.json();
};

export const createProfesseur = async (professeur: Omit<Professeur, 'id'>): Promise<Professeur> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(professeur),
  });
  if (!response.ok) throw new Error('Échec de la création du professeur');
  return response.json();
};

export const updateProfesseur = async (professeur: Professeur): Promise<Professeur> => {
  const response = await fetch(`${API_URL}/${professeur.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(professeur),
  });
  if (!response.ok) throw new Error('Échec de la mise à jour du professeur');
  return response.json();
};

export const deleteProfesseur = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Échec de la suppression du professeur');
};