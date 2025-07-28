import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonCard } from '../components/Card';
import type { PokemosDetails } from '../types';
// import { getAllPokemons, getPokemonDetails } from '../api';
import { dummyPokemonList } from '../data';

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemosDetails[]>([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        // const response = await getAllPokemons();
        // const pokemons = await Promise.all(
        //   response.results.map((pokemon) => getPokemonDetails(pokemon.url))
        // );
        // setPokemonList(pokemons);
        setPokemonList(dummyPokemonList);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonList();
  }, []);

  return (
    <>
      <header className="header">
        <h1 onClick={handleClick}>Pokedex</h1>
      </header>
      <main className="main">
        {pokemonList?.map((pokemon: PokemosDetails) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </main>
    </>
  );
};
