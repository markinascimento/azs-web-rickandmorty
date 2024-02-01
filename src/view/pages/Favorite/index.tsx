// -> Controller
import { useFavoriteController } from './useFavoriteController';

// -> Components
import { BodyList } from '../../components/BodyList';
import { Container } from '../../components/Container';
import { InputFilter } from '../../components/InputFilter';
import { EpisodeCard } from '../../components/EpisodeCard';

// -> Types
import { EpisodeDTO } from '../../../app/DTOS/EpisodeDTO';
import { EmptyState } from '../../components/EmptyState';

export function Favorite() {
  const {
    // Variables
    filter,
    episodes,

    // Functions
    handleChangeFilter,
    handleClearInputFilter
  } = useFavoriteController();

  return (
    <Container>
      <InputFilter
        value={filter}
        isClear={!!filter.length}
        onClear={handleClearInputFilter}
        onChange={handleChangeFilter}
        placeholder='Pesquisar nome do episodio'
      />

      <BodyList className='mt-6'>
        {episodes.length <= 0 && (
          <div className='flex items-center justify-center w-full h-full'>
            <EmptyState title='Não encontramos nenhum episodio na lista de favoritos' />
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
