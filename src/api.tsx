import axios from "axios";
import type { PokemonList } from "./types";

export const getAllPokemons = async (): Promise<PokemonList> => {
  const { data } = await axios.get<PokemonList>(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return data;
};
