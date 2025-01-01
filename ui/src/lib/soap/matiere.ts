import { Matiere } from '../../types';

const SOAP_URL = 'http://localhost:9999/matiere-service/soap';

// Fonction utilitaire pour créer une enveloppe SOAP
const createSoapEnvelope = (action: string, content: string) => `
  <?xml version="1.0" encoding="UTF-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <${action}>${content}</${action}>
    </soap:Body>
  </soap:Envelope>
`;

// Fonction utilitaire pour parser la réponse SOAP
const parseSoapResponse = (xml: string) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  return xmlDoc;
};

export const fetchMatieres = async (): Promise<Matiere[]> => {
  const envelope = createSoapEnvelope('getAllMatieres', '');
  
  const response = await fetch(SOAP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml',
      'SOAPAction': 'getAllMatieres'
    },
    body: envelope
  });

  if (!response.ok) throw new Error('Échec du chargement des matières');
  
  const xmlText = await response.text();
  const xmlDoc = parseSoapResponse(xmlText);
  
  // Transformation de la réponse XML en objets Matiere
  const matieres: Matiere[] = [];
  const matieresNodes = xmlDoc.getElementsByTagName('matiere');
  
  Array.from(matieresNodes).forEach(node => {
    matieres.push({
      id: node.getAttribute('id') || '',
      nom: node.getElementsByTagName('nom')[0]?.textContent || '',
      code: node.getElementsByTagName('code')[0]?.textContent || '',
      description: node.getElementsByTagName('description')[0]?.textContent || '',
      professeurId: node.getElementsByTagName('professeurId')[0]?.textContent || ''
    });
  });
  
  return matieres;
};

export const createMatiere = async (matiere: Omit<Matiere, 'id'>): Promise<Matiere> => {
  const matiereXml = `
    <matiere>
      <nom>${matiere.nom}</nom>
      <code>${matiere.code}</code>
      <description>${matiere.description}</description>
      <professeurId>${matiere.professeurId}</professeurId>
    </matiere>
  `;
  
  const envelope = createSoapEnvelope('createMatiere', matiereXml);
  
  const response = await fetch(SOAP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml',
      'SOAPAction': 'createMatiere'
    },
    body: envelope
  });

  if (!response.ok) throw new Error('Échec de la création de la matière');
  
  const xmlText = await response.text();
  const xmlDoc = parseSoapResponse(xmlText);
  const matiereNode = xmlDoc.getElementsByTagName('matiere')[0];
  
  return {
    id: matiereNode.getAttribute('id') || '',
    nom: matiereNode.getElementsByTagName('nom')[0]?.textContent || '',
    code: matiereNode.getElementsByTagName('code')[0]?.textContent || '',
    description: matiereNode.getElementsByTagName('description')[0]?.textContent || '',
    professeurId: matiereNode.getElementsByTagName('professeurId')[0]?.textContent || ''
  };
};