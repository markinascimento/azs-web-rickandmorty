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

export interface SeriesContextProps {
  // Variables
  watched: EpisodeDTO[];
  favorites: EpisodeDTO[];

  // Functions
  toggleEpisodeWatched(episode: EpisodeDTO): void;
  toggleEpisodeFavorite(episode: EpisodeDTO): void;
}
