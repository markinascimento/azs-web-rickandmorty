import { ReactNode, createContext, useCallback, useState } from 'react';
import { localStorageKeys } from '../config/localStorageKeys';
import { EpisodeDTO, SeriesContextProps } from './interface';
import toast from 'react-hot-toast';

export const SeriesContext = createContext({} as SeriesContextProps);

export function SeriesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<EpisodeDTO[]>(() => {
    const storagedEpisodesFavorite = JSON.parse(localStorage.getItem(localStorageKeys.EPISODES_FAVORITE)!);
    return storagedEpisodesFavorite ?? [];
  });

  const [watched, setWatched] = useState<EpisodeDTO[]>(() => {
    const storagedEpisodesWhatched = JSON.parse(localStorage.getItem(localStorageKeys.EPISODES_WATCHED)!);
    return storagedEpisodesWhatched ?? [];
  });

  const toggleEpisodeFavorite = useCallback((episode: EpisodeDTO) => {
    setFavorites(prevState => {
      const itemIndex = prevState.findIndex(state => state.id === episode.id);

      if(itemIndex >= 0) {
        const removeEpisode = prevState.filter(state => state.id !== episode.id);
        toast.success('Episodio removido dos seus favoritos.');
        localStorage.setItem(localStorageKeys.EPISODES_FAVORITE, JSON.stringify(removeEpisode));
        return removeEpisode;
      }

      const allEpisodes = [...prevState, episode];

      toast.success('Episodio adicionado aos seus favoritos.');
      localStorage.setItem(localStorageKeys.EPISODES_FAVORITE, JSON.stringify(allEpisodes));
      return allEpisodes;
    });
  }, []);

  const toggleEpisodeWatched = useCallback((episode: EpisodeDTO) => {
    setWatched(prevState => {
      const itemIndex = prevState.findIndex(state => state.id === episode.id);

      if(itemIndex >= 0) {
        const removeEpisode = prevState.filter(state => state.id !== episode.id);
        toast.success('Episodio removido da lista de assistidos.');
        localStorage.setItem(localStorageKeys.EPISODES_WATCHED, JSON.stringify(removeEpisode));
        return removeEpisode;
      }

      const allEpisodes = [...prevState, episode];

      toast.success('Episodio adicionado da lista de assistidos.');
      localStorage.setItem(localStorageKeys.EPISODES_WATCHED, JSON.stringify(allEpisodes));
      return allEpisodes;
    });
  }, []);

  return (
    <SeriesContext.Provider
      value={{
        favorites,
        watched,
        toggleEpisodeWatched,
        toggleEpisodeFavorite
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
}
