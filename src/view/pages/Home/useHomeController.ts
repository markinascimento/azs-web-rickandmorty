// -> ReactJS
import { ChangeEvent, useMemo, useState } from 'react';

// -> Query lib
import { useQuery } from '@apollo/client';

// -> Query
import { GET_ALL_EPISODES } from '../../../app/queries/GET_ALL_EPISODES';

// -> Types
import { EpisodeDTO } from '../../../app/DTOS/EpisodeDTO';

export function useHomeController() {
  const { loading, data } = useQuery(GET_ALL_EPISODES);

  const [filter, setFilter] = useState<string>('');

  function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  function handleClearInputFilter() {
    setFilter('');
  }

  const filteredEpisodes = useMemo(() => (
    data?.episodes.results.filter((episode: EpisodeDTO) => (
      episode.name.toLocaleLowerCase().includes(filter.toLowerCase()
      )))
  ), [data, filter]);

  return {
    // Variables
    filter,
    loading,
    episodes: filteredEpisodes ?? [],

    // Functions
    handleChangeFilter,
    handleClearInputFilter
  };
}
