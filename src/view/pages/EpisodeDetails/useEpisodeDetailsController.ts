// -> Query lib
import { useQuery } from '@apollo/client';

// -> Routing lib
import { useParams } from 'react-router-dom';

// -> Custom hooks
import { useEpisodes } from '../../../app/hooks/useEpisodes';

// -> query
import { GET_EPISODE_BY_ID } from '../../../app/queries/GET_EPISODE_BY_ID';

// -> Types
import { EpisodeDTO } from '../../../app/DTOS/EpisodeDTO';

export function useEpisodeDetailsController() {
  const { id } = useParams();

  const {
    watched,
    favorites,
    toggleEpisodeWatched,
    toggleEpisodeFavorite,
  } = useEpisodes();

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


