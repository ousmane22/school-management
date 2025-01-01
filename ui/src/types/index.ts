export interface Etudiant {
  id: string;
  prenom: string;
  nom: string;
  classeId: string;
}

export interface Professeur {
  id: string;
  prenom: string;
  nom: string;
  email: string;
}

export interface Matiere {
  id: string;
  nom: string;
  code: string;
  description: string;
  professeurId: string;
}

export interface Classe {
  id: string;
  nom: string;
  capacite: number;
}