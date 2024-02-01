import { gql } from '@apollo/client';

export const GET_EPISODE_BY_ID = gql `
  query GetEpisodeById($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      name
      episode
      air_date
      characters {
        id
        name
        image
        status
        species
      }
    }
  }
`;
