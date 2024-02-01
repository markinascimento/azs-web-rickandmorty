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
