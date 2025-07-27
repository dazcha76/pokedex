export type PokemonList = {
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
};

export type PokemonItem = {
  name: string;
  url: string;
};

export type PokemosDetails = {
  // abilities: [];
  // base_experience: number;
  // cries: {};
  // forms: [];
  // game_indices: [];
  // height: number;
  // held_items: [];
  // id: 1;
  // is_default: true;
  // location_area_encounters: string;
  // moves: [];
  name: string;
  // order: 1;
  // past_abilities: [];
  // past_types: [];
  // species: {};
  sprites: Sprites;
  // stats: [];
  // types: [];
  // weight: number;
};

type Sprites = {
  other: {
    dream_world: {
      front_default: string;
    };
  };
};
