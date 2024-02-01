// -> ReactJS
import { ChangeEvent, useMemo, useState } from 'react';

// -> Custom hooks
import { useEpisodes } from '../../../app/hooks/useEpisodes';

// -> Types
import { EpisodeDTO } from '../../../app/DTOS/EpisodeDTO';

export function useContinuaWatchingController() {
  const { watched } = useEpisodes();

  const [filter, setFilter] = useState('');

  function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  function handleClearInputFilter() {
    setFilter('');
  }

  const filteredEpisodes = useMemo(() => (
    watched.filter((episode: EpisodeDTO) => (
      episode.name.toLocaleLowerCase().includes(filter.toLowerCase()
      )))
  ), [watched, filter]);

  const orderArrayById = filteredEpisodes.sort((a, b) => {
    if(Number(a.id) < Number(b.id)) {
      return -1;
    }  else {
      return 1;
    }
  });

  return {
    // Variables
    filter,
    episodes: orderArrayById ?? [],

    // Functions
    handleChangeFilter,
    handleClearInputFilter
  };
}
