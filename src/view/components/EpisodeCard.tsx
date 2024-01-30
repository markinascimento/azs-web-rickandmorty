// -> Routing lib
import { Link } from 'react-router-dom';

// -> Image
import logoImg from '../assets/logo.webp';

// -> Types
import { EpisodeDTO } from '../../app/DTOS/EpisodeDTO';

export function EpisodeCard({ episode }: {episode: EpisodeDTO}) {
  return (
    <Link
      to={`/episode/${episode.id}`}
      className='flex flex-col gap-2 text-zinc-800 p-4 mb-4 '
    >
      <div className="flex flex-col items-center justify-between bg-white p-4 min-h-[350px] rounded">
        <img src={logoImg} alt="" className='rounded' />

        <div
          className="flex flex-col w-full h-24 text-sm tracking-[-0.5px] font-medium text-zinc-800
        bg-zinc-200 p-2 rounded-md"
        >
          <span> {`${episode.name} - ${episode.episode}`} </span>
          <span> {episode.air_date} </span>
          <strong> {`${episode.characters.length} personagens`} </strong>
        </div>
      </div>
    </Link>
  );
}
