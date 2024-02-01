import useSeries from '../../app/hooks/useSeries';

export function Favorite() {
  const { favorites, toggleEpisodeFavorite } = useSeries();

  return (
    <div>
      {favorites.map((favorite) => (
        <span
          className='block'
          key={favorite.id}
          onClick={() => toggleEpisodeFavorite(favorite)}
        >
          {`${favorite.name} - ${favorite.episode}`}
        </span>
      ))}
    </div>
  );
}
