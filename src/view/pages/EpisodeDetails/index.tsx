import { BodyList } from '../../components/BodyList';
import { Container } from '../../components/Container';
import { Loader } from '../../components/Loader';
import { useEpisodeDetailsController } from './useEpisodeDetailsController';

import bannerImg from '../../assets/banner.svg';
import { Star } from '../../components/Star';
import { CheckCircle2 } from 'lucide-react';

export function EpisodeDetails() {
  const { episode, loading } = useEpisodeDetailsController();

  return (
    <Container>
      {loading && (
        <Loader />
      )}

      {!loading && (
        <>
          <header className="flex w-full items-center justify-center px-6">
            <div className='flex flex-col relative'>
              <img src={bannerImg} className='rounded-lg' />

              <span className='absolute top-2 left-2 bg-white px-2 py-1 rounded text-zinc-800 text-sm font-medium'>
                {episode.episode}
              </span>

              <strong className='tracking-[-0.5px] mt-1'> {episode.name} </strong>

              <span className='block tracking-[-0.5px] font-medium text-sm text-gray-400'>
                Exibido em {episode.air_date}
              </span>

              <button
                onClick={() => console.log('favorito')}
                className='absolute top-2 right-2 flex w-12 h-12 items-center justify-center rounded-full'
              >
                <Star />
              </button>

              <button
                onClick={() => console.log('visto')}
                className='absolute bottom-14 right-2 flex w-12 h-12 items-center justify-center bg-white rounded-full'
              >
                <CheckCircle2 className='text-green-500' />
              </button>
            </div>
          </header>

          <BodyList className='mt-6'>
            <div className='grid grid-cols-2 px-6 gap-4 md:grid-cols-4 md:px-2'>
              {episode.characters.map(character => (
                <div
                  key={character.id}
                  className='flex flex-col items-center gap-2 bg-primary rounded-lg p-4 w-[200px]'
                >
                  <img src={character.image} className='w-40 h-28 rounded-md'/>

                  <div className='flex flex-col w-full'>
                    <span className='font-semibold tracking-[-0.5px]'> {character.name} </span>
                    <small className='text-gray-400 font-medium tracking-[-0.5px]'> {character.species} </small>
                    <small className='text-gray-400 font-medium tracking-[-0.5px]'>
                      Status -
                      {character.status === 'Alive' && ' Vivo'}
                      {character.status === 'Dead' && ' Morto'}
                      {character.status === 'unknown' && ' Desconhecido'}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </BodyList>
        </>
      )}
    </Container>
  );
}
