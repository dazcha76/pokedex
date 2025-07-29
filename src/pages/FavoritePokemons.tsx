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
    <>
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <main className="main">
        <div className="board">
          {favoritePokemons?.map((pokemon: PokemonFavorites) => (
            <InfoCard
              key={pokemon.name}
              title={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </div>
      </main>
    </>
  );
};
