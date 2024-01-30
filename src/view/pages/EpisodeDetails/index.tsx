import { useParams } from 'react-router-dom';

export function EpisodeDetails() {
  const { id } = useParams();

  return (
    <div> Episodio n° {id} </div>
  );
}
