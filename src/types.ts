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
  base_experience: number;
  // cries: {};
  // forms: [];
  // game_indices: [];
  height: number;
  // held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  // moves: [];
  name: string;
  order: number;
  // past_abilities: [];
  // past_types: [];
  // species: {};
  sprites: Sprites;
  stats: Stats[];
  // types: [];
  weight: number;
};

type Sprites = {
  other: OtherSprites;
};

interface OtherSprites {
  dream_world: DreamWorldSprite;
}

interface DreamWorldSprite {
  front_default: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: StatInfo;
}

interface StatInfo {
  name: string;
  url: string;
}
