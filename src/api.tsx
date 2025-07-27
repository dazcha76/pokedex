import axios from 'axios';
import type { PokemonList, PokemosDetails } from './types';

export const getAllPokemons = async (): Promise<PokemonList> => {
  const { data } = await axios.get<PokemonList>(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  return data;
};

export const getPokemonDetails = async (
  url: string
): Promise<PokemosDetails> => {
  const { data } = await axios.get<PokemosDetails>(url);
  return data;
};
