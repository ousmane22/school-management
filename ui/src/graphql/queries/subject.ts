import { gql } from '@apollo/client';

export const GET_ALL_SUBJECTS = gql`
  query GetAllSubjects {
    getAllSubjects {
      id
      name
      code
      description
    }
  }
`;

export const SAVE_SUBJECT = gql`
  mutation SaveSubject($name: String!, $code: String!, $description: String!) {
    saveSubject(subject: { name: $name, code: $code, description: $description }) {
      id
      name
      code
      description
    }
  }
`;

export const UPDATE_SUBJECT = gql`
  mutation UpdateSubject($id: ID!, $name: String!, $code: String!, $description: String!) {
    updateSubject(id: $id, subject: { name: $name, code: $code, description: $description }) {
      id
      name
      code
      description
    }
  }
`;

export const DELETE_SUBJECT = gql`
  mutation DeleteSubject($id: ID!) {
    deleteSubject(id: $id)
  }
`;