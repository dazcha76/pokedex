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
      // Build Pokémon info url based on page # selected
      newUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
        +page * 20 - 20
      }&limit=20`;
    } else if (page === 'previous' && pokemonResponse?.previous) {
      // Use 'previous' url provided in initial API call
      newUrl = pokemonResponse.previous;
    } else if (page === 'next' && pokemonResponse?.next) {
      // Use 'next' url provided in initial API call
      newUrl = pokemonResponse.next;
    }

    if (newUrl && newUrl !== url) {
      setUrl(newUrl);
    }
  };

  useEffect(() => {
    const getPokemonList = async () => {
      // Show skeleton while data is retrieved
      setIsLoading(true);
      try {
        // Get list of Pokémons
        const response = await getAllPokemons(url);
        setPokemonResponse(response);
        // Call the endpoint returned above for each Pokémon to get image
        const pokemons = await Promise.all(
          response.results.map((pokemon) => getPokemonDetails(pokemon.name))
        );
        setPokemonDetails(pokemons);
      } catch (error) {
        console.error(error);
      } finally {
        // Remove skeleton and display Pokémons
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
