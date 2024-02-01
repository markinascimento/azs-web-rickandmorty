import { EpisodeDTO } from '../../../app/DTOS/EpisodeDTO';
import { BodyList } from '../../components/BodyList';
import { Container } from '../../components/Container';
import { EmptyState } from '../../components/EmptyState';
import { EpisodeCard } from '../../components/EpisodeCard';
import { InputFilter } from '../../components/InputFilter';
import { useContinuaWatchingController } from './useContinuaWatchingController';

export function ContinuaWatching() {
  const {
    episodes,
    filter,
    handleChangeFilter,
    handleClearInputFilter,
  } = useContinuaWatchingController();

  return (
    <Container>
      <InputFilter
        value={filter}
        isClear={!!filter.length}
        onClear={handleClearInputFilter}
        onChange={handleChangeFilter}
        placeholder='Pesquisar episodio pelo nome'
      />

      <BodyList className='mt-6'>
        {episodes.length <= 0 && (
          <div className='flex items-center justify-center w-full h-full'>
            <EmptyState title='Não encontramos nenhum episodio na lista de assistidos' />
          </div>
        )}

        {episodes.length > 0 && (
          <div className='grid grid-cols-1 px-6 gap-4 md:grid-cols-3 md:px-2'>
            {episodes.map((episode: EpisodeDTO) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        )}
      </BodyList>
    </Container>
  );
}
