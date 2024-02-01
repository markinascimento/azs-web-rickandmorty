import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_EPISODE_BY_ID } from '../../../app/queries/GET_EPISODE_BY_ID';

export interface EpisodeDTO {
  id: number;
  air_date: string;
  characters: Array<{
    id: string;
    image: string;
    name: string;
    species: string;
    status: string;
  }>;
  created: Date;
  episode: string;
  name: string;
  url: string;
}

export function useEpisodeDetailsController() {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_EPISODE_BY_ID, {
    variables: { episodeId: id }
  });

  const episode: EpisodeDTO = data?.episode;

  return {
    loading,
    episode,
  };
}


