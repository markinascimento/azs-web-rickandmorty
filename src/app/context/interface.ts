import { EpisodeDTO } from '../DTOS/EpisodeDTO';

export interface EpisodesContextProps {
  // Variables
  watched: EpisodeDTO[];
  favorites: EpisodeDTO[];

  // Functions
  toggleEpisodeWatched(episode: EpisodeDTO): void;
  toggleEpisodeFavorite(episode: EpisodeDTO): void;
}
