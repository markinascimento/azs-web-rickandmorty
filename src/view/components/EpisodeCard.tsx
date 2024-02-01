// -> Routing lib
import { Link, useLocation } from 'react-router-dom';

// -> Icons lib
import { CheckCircle2, Star } from 'lucide-react';

// -> Custom Hooks
import { useEpisodes } from '../../app/hooks/useEpisodes';

// -> Utils
import { cn } from '../../app/utils/cn';

// -> Image
import logoImg from '../assets/img.png';

// -> Types
import { EpisodeDTO } from '../../app/DTOS/EpisodeDTO';

export function EpisodeCard({ episode }: {episode: EpisodeDTO}) {
  const { pathname } = useLocation();

  const {
    watched,
    favorites,
    toggleEpisodeWatched,
    toggleEpisodeFavorite
  } = useEpisodes();

  const isFavorite = favorites.some(item => item.id === episode?.id);

  const hasWatched = watched.some(item => item.id === episode?.id);

  console.log(episode);

  return (
    <div
      className={cn(
        `flex flex-col w-full items-center gap-4 min-h-[368px] rounded-2xl bg-[#121E29] p-4 md:min-h-[268px]
        relative border-b-4 border-transparent`,
        hasWatched && 'border-green-500'
      )}
    >
      <Link to={`/episode/${episode.id}`}>
        <img src={logoImg} alt="" />
      </Link>

      <div className='w-full h-full mt-6 md:mt-2'>
        <div className='flex w-full items-start gap-2'>
          <strong className='tracking-[-0.5px]'> {episode.name} </strong>
          <span className='text-xs bg-primary block px-2 py-1 rounded tracking-[-1px font-bold]'>
            {episode.episode}
          </span>
        </div>

        <span className='block mt-2 tracking-[-0.5px] font-medium text-sm'>
          {episode.characters.length}
          {episode.characters.length > 1 ? ' Personagens' : ' Personagen'}
        </span>

        <span className='block mt-2 tracking-[-0.5px] font-medium text-sm text-gray-500'>
          Exibido em {episode.air_date}
        </span>
      </div>

      {pathname !== '/favorite' && (
        <button
          onClick={() => toggleEpisodeWatched(episode)}
          className='absolute top-2 left-2 flex w-12 h-12 items-center justify-center rounded-full'
        >
          <CheckCircle2
            fill={hasWatched ? '#FFF' : 'transparent'}
            strokeWidth={2}
            className={cn( hasWatched ? 'text-green-500' : 'text-green-900' )}
          />
        </button>
      )}

      {pathname !== '/continue_watching' && (
        <button
          onClick={() => toggleEpisodeFavorite(episode)}
          className='absolute top-2 right-2 flex w-12 h-12 items-center justify-center rounded-full'
        >
          <Star
            fill={isFavorite ? '#F7C700' : 'transparent'}
            strokeWidth={isFavorite ? 0 : 2}
          />
        </button>
      )}
    </div>
  );
}
