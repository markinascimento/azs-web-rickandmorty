// -> ReactJS
import { useContext } from 'react';

// -> ContextAPI
import { EpisodesContext } from '../context/EpisodesContext';

export function useEpisodes() {
  return useContext(EpisodesContext);
}
