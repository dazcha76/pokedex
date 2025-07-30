import axios from 'axios';
import type { PokemonResponse, PokemonSpecies, PokemosDetails } from './types';

export const getAllPokemons = async (url: string): Promise<PokemonResponse> => {
  const { data } = await axios.get<PokemonResponse>(url);
  return data;
};

export const getPokemonDetails = async (
  name: string
): Promise<PokemosDetails> => {
  const { data } = await axios.get<PokemosDetails>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  return data;
};

export const getSpeciesInfo = async (name: string): Promise<PokemonSpecies> => {
  const { data } = await axios.get<PokemonSpecies>(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  return data;
};
