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
  mutation SaveClassroom($name: String, $capacity: Int) {
    saveClassroom(classroomRequest: { name: $name, capacity: $capacity }) {
      id
      name
      capacity
    }
  }
`;

export const DELETE_CLASSROOM = gql`
  mutation DeleteClassroom($id: Int!) {
    deleteClassroom(id: $id)
  }
`;
