import { useEffect, useState } from 'react';
// import { getAllPokemons, getPokemonDetails } from './api';
import './App.css';
import type { PokemosDetails } from './types';
import { PokemonCard } from './components/Card';
import { dummyPokemonList } from './data';

function App() {
  const [pokemonList, setPokemonList] = useState<PokemosDetails[]>([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        // const response = await getAllPokemons();
        // const pokemons = await Promise.all(
        //   response.results.map((pokemon) => getPokemonDetails(pokemon.url))
        // );

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
        <h1>Pokedex</h1>
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
}

export default App;
