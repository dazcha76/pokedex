import { useEffect, useState } from "react";
import { getAllPokemons } from "./api";
import "./App.css";
import type { PokemonItem, PokemonList } from "./types";

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonList>();

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const response = await getAllPokemons();
        setPokemonList(response);
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
        {pokemonList?.results?.map((pokemon: PokemonItem) => (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
            <p>{pokemon.url}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
