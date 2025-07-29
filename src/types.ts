export type PokemonResponse = {
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
};

export type PokemonItem = {
  name: string;
  url: string;
};

export type PokemosDetails = {
  abilities: PokemonAbility[];
  height: number;
  id: number;
  name: string;
  sprites: Sprites;
  stats: Stats[];
  types: PokemonType[];
  weight: number;
};

// ------ Ability ------ //

export type PokemonAbility = {
  ability: AbilityInfo;
  is_hidden: boolean;
};

type AbilityInfo = {
  name: string;
};

// ------ Species ------ //

export type PokemonSpecies = {
  flavor_text_entries: FlavorTextEntry[];
};

export type FlavorTextEntry = {
  flavor_text: string;
};

// ------ Sprites ------ //

type Sprites = {
  other: OtherSprites;
};

type OtherSprites = {
  dream_world: DreamWorldSprite;
};

type DreamWorldSprite = {
  front_default: string;
};

// ------ Stats ------ //

type Stats = {
  base_stat: number;
  effort: number;
  stat: StatInfo;
};

type StatInfo = {
  name: string;
  url: string;
};

// ------ Type ------ //

export type PokemonType = {
  type: TypeInfo;
};

type TypeInfo = {
  name: string;
};
