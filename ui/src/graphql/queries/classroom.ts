import { gql } from '@apollo/client';

export const GET_ALL_CLASSROOMS = gql`
  query GetAllClassrooms {
    getAllClassrooms {
      id
      name
      capacity
      teacherId
    }
  }
`;

export const SAVE_CLASSROOM = gql`
  mutation SaveClassroom($name: String!, $capacity: Int!, $teacherId: ID) {
    saveClassroom(classroom: { name: $name, capacity: $capacity, teacherId: $teacherId }) {
      id
      name
      capacity
      teacherId
    }
  }
`;

export const UPDATE_CLASSROOM = gql`
  mutation UpdateClassroom($id: ID!, $name: String!, $capacity: Int!, $teacherId: ID) {
    updateClassroom(id: $id, classroom: { name: $name, capacity: $capacity, teacherId: $teacherId }) {
      id
      name
      capacity
      teacherId
    }
  }
`;

export const DELETE_CLASSROOM = gql`
  mutation DeleteClassroom($id: ID!) {
    deleteClassroom(id: $id)
  }
`;