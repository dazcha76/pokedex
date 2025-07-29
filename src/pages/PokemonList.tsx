import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoCard } from '../components/Card';
import type { PokemosDetails } from '../types';
import { dummyPokemonList } from '../data';
// import { getAllPokemons, getPokemonDetails } from '../api';
// import { dummyPokemonList } from '../data';

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
        //   response.results.map((pokemon) => getPokemonDetails(pokemon.name))
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
        <div className="board">
          {pokemonList?.map((pokemon: PokemosDetails) => (
            <InfoCard
              key={pokemon.name}
              title={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
            />
          ))}
        </div>
      </main>
    </>
  );
};
