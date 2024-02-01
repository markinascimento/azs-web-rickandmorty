// -> Routing lib
import { Link } from 'react-router-dom';

// -> Icons lib
import { CheckCircle2 } from 'lucide-react';

// -> Components
import { Star } from './Star';

// -> Image
import logoImg from '../assets/img.png';

// -> Types
import { EpisodeDTO } from '../../app/DTOS/EpisodeDTO';

export function EpisodeCard({ episode }: {episode: EpisodeDTO}) {
  return (
    <Link
      to={`/episode/${episode.id}`}
      className="flex flex-col w-full items-center gap-4 min-h-[368px] rounded-2xl bg-[#121E29] p-4
      md:min-h-[268px] relative border-b-4 border-green-500"
    >
      <img src={logoImg} alt="" />

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

      <div className='flex items-center justify-center absolute w-10 h-10 top-2 left-2'>
        <CheckCircle2 className='text-green-500' />
      </div>

      <div className='flex items-center justify-center absolute w-10 h-10 top-2 right-2'>
        <Star />
      </div>

      <div className='absolute w-full h-full top-0 z-50 inset-0 rounded-2xl'></div>
    </Link>
  );
}
