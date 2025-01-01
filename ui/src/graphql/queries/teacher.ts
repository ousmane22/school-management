import { gql } from '@apollo/client';

export const GET_ALL_TEACHERS = gql`
  query GetAllTeachers {
    getAllTeachers {
      id
      firstName
      lastName
      email
      subjects
    }
  }
`;

export const SAVE_TEACHER = gql`
  mutation SaveTeacher($firstName: String!, $lastName: String!, $email: String!, $subjects: [ID!]!) {
    saveTeacher(teacher: { firstName: $firstName, lastName: $lastName, email: $email, subjects: $subjects }) {
      id
      firstName
      lastName
      email
      subjects
    }
  }
`;

export const UPDATE_TEACHER = gql`
  mutation UpdateTeacher($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $subjects: [ID!]!) {
    updateTeacher(id: $id, teacher: { firstName: $firstName, lastName: $lastName, email: $email, subjects: $subjects }) {
      id
      firstName
      lastName
      email
      subjects
    }
  }
`;

export const DELETE_TEACHER = gql`
  mutation DeleteTeacher($id: ID!) {
    deleteTeacher(id: $id)
  }
`;