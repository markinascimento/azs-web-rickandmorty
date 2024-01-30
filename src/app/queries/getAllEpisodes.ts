import { gql } from '@apollo/client';

export const getAllEpisodes = gql`
  query {
    episodes {
      results {
        id
        name
        episode
        air_date
        characters {
          name
          id
        }
      }
    }
  }
`;
