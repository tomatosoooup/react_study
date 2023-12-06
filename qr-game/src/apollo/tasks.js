import { gql } from "@apollo/client";

export const ADD_OBJECT = gql`
  mutation CreateObject(
    $title: String!
    $photo_url: String!
    $completed: Boolean!
  ) {
    createQrCode: createQrCode(
      title: $title
      photo_url: $photo_url
      completed: $completed
    ) {
      id
    }
  }
`;

// export const GET_OBJECT = gql`
//   query GetObject($id: ID!) {
//     object(id: $id) {
//       id
//       text
//       photo
//     }
//   }
// `;
