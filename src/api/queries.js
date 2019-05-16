import gql from "graphql-tag";

// Graphql API Queries
export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;
