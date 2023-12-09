import { gql } from "@apollo/client";

export const ADD_OBJECT = gql`
  mutation CreateObject(
    $title: String!
    $photo_url: String!
    $description: String!
    $completed: Boolean!
  ) {
    createQrCode: createQrCode(
      title: $title
      photo_url: $photo_url
      description: $description
      completed: $completed
    ) {
      id
    }
  }
`;

export const GET_OBJECT = gql`
  query getObject($id: ID!) {
    getObject: QrCode(id: $id) {
      id
      title
      description
      photo_url
      completed
    }
  }
`;
