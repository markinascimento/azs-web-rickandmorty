// -> Controller
import { useHomeController } from './useHomeController';

// -> Components
import { Loader } from '../../components/Loader';
import { BodyList } from '../../components/BodyList';
import { Container } from '../../components/Container';
import { InputFilter } from '../../components/InputFilter';
import { EpisodeCard } from '../../components/EpisodeCard';

// -> Types
import { EpisodeDTO } from '../../../app/DTOS/EpisodeDTO';

export function Home() {
  const {
    // Variables
    filter,
    loading,
    episodes,

    // Functions
    handleChangeFilter,
    handleClearInputFilter
  } = useHomeController();

  return (
    <Container>
      {loading && (
        <Loader />
      )}

      {!loading && (
        <>
          <InputFilter
            value={filter}
            isClear={!!filter.length}
            onClear={handleClearInputFilter}
            onChange={handleChangeFilter}
            placeholder='Pesquisar episodio pelo nome'
          />

          <BodyList className='mt-6'>
            <div className='grid grid-cols-1 px-6 gap-4 md:grid-cols-3 md:px-2'>
              {episodes.map((episode: EpisodeDTO) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          </BodyList>
        </>
      )}
    </Container>
  );
}
