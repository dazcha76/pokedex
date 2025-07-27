import { useEffect, useState } from 'react';
import { getAllPokemons, getPokemonDetails } from './api';
import './App.css';
import type { PokemosDetails } from './types';

function App() {
  const [pokemonList, setPokemonList] = useState<PokemosDetails[]>([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const response = await getAllPokemons();
        const pokemons = await Promise.all(
          response.results.map((pokemon) => getPokemonDetails(pokemon.url))
        );

        setPokemonList(pokemons);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonList();
  }, []);

  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        {pokemonList?.map((pokemon: PokemosDetails) => (
          <div key={pokemon.name}>
            <img src={pokemon.sprites.other.dream_world.front_default} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
