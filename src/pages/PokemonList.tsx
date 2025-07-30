import { useEffect, useState } from 'react';
import { InfoCard } from '../components/Card';
import type { PokemonResponse, PokemosDetails } from '../types';
import { PaginationComponent } from '../components/Pagination';
import { getAllPokemons, getPokemonDetails } from '../api';
import { CardSkeleton } from '../components/CardSkeleton';

export const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [pokemonResponse, setPokemonResponse] = useState<PokemonResponse>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemosDetails[]>([]);

  const handlePageChange = (page: string) => {
    let newUrl = '';

    if (page !== 'previous' && page !== 'next') {
      newUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
        +page * 20 - 20
      }&limit=20`;
    } else if (page === 'previous' && pokemonResponse?.previous) {
      newUrl = pokemonResponse.previous;
    } else if (page === 'next' && pokemonResponse?.next) {
      newUrl = pokemonResponse.next;
    }

    if (newUrl && newUrl !== url) {
      setUrl(newUrl);
    }
  };

  useEffect(() => {
    const getPokemonList = async () => {
      setIsLoading(true);
      try {
        // get list of pokemons
        const response = await getAllPokemons(url);
        setPokemonResponse(response);
        // call the endpoint returned for eack pokemon to get image
        const pokemons = await Promise.all(
          response.results.map((pokemon) => getPokemonDetails(pokemon.name))
        );
        setPokemonDetails(pokemons);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemonList();
  }, [url]);

  return (
    <main>
      <h1 className="title">Pokedex</h1>
      <div className="board">
        {isLoading &&
          [...Array(20)].map((_, index) => <CardSkeleton key={index} />)}

        {!isLoading &&
          pokemonDetails?.map((pokemon: PokemosDetails) => (
            <InfoCard
              key={pokemon.name}
              title={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
            />
          ))}
      </div>
      <PaginationComponent onPageChange={handlePageChange} />
    </main>
  );
};
