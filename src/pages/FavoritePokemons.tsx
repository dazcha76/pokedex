import { useEffect, useState } from 'react';
import type { PokemonFavorites } from '../types';
import { InfoCard } from '../components/Card';

export const FavoritePokemons = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<PokemonFavorites[]>(
    []
  );

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      try {
        setFavoritePokemons(JSON.parse(favorites));
      } catch (e) {
        console.error('Invalid favorites JSON in localStorage:', e);
        setFavoritePokemons([]);
      }
    }
  }, []);

  return (
    <main>
      <h1 className="title">My Favorites</h1>

      {!favoritePokemons.length && <h1>You don't have any favorites.</h1>}

      {favoritePokemons && (
        <div className="board">
          {favoritePokemons?.map((pokemon: PokemonFavorites) => (
            <InfoCard
              key={pokemon.name}
              title={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </div>
      )}
    </main>
  );
};
