export interface EpisodeDTO {
  id: number;
  air_date: string;
  characters: Array<string>;
  created: Date;
  episode: string;
  name: string;
  url: string;
}
