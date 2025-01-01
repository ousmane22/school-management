import { gql } from '@apollo/client';

export const GET_ALL_CLASSROOMS = gql`
  query GetAllClassrooms {
    getAllClassrooms {
      id
      name
      capacity
    }
  }
`;

export const SAVE_CLASSROOM = gql`
  mutation SaveClassroom($name: String!, $capacity: Int!) {
    saveClassroom(classroom: { name: $name, capacity: $capacity }) {
      id
      name
      capacity
    }
  }
`;

export const UPDATE_CLASSROOM = gql`
  mutation UpdateClassroom($id: ID!, $name: String!, $capacity: Int!) {
    updateClassroom(id: $id, classroom: { name: $name, capacity: $capacity }) {
      id
      name
      capacity
    }
  }
`;

export const DELETE_CLASSROOM = gql`
  mutation DeleteClassroom($id: ID!) {
    deleteClassroom(id: $id)
  }
`;