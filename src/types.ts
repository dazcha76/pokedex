export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
};

export type PokemonItem = {
  name: string;
  url: string;
};
