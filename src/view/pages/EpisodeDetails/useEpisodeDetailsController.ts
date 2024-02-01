// -> Query lib
import { useQuery } from '@apollo/client';

// -> Routing lib
import { useParams } from 'react-router-dom';

// -> query
import { GET_EPISODE_BY_ID } from '../../../app/queries/GET_EPISODE_BY_ID';
import useSeries from '../../../app/hooks/useSeries';

// -> Types
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

  const {
    watched,
    favorites,
    toggleEpisodeWatched,
    toggleEpisodeFavorite,
  } = useSeries();

  const { data, loading } = useQuery(GET_EPISODE_BY_ID, {
    variables: { episodeId: id! }
  });

  const episode: EpisodeDTO = data?.episode;

  const isFavorite = favorites.some(item => item.id === episode?.id);

  const hasWatched = watched.some(item => item.id === episode?.id);

  return {
    loading,
    episode,
    isFavorite,
    hasWatched,
    toggleEpisodeWatched,
    toggleEpisodeFavorite
  };
}


