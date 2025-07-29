import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StatsProgressBar } from '../components/ProgressBar';
import { FaHeart, FaLock, FaRegHeart } from 'react-icons/fa';
// import { getPokemonDetails, getSpeciesInfo } from '../api';
import type {
  PokemonAbility,
  PokemonSpecies,
  PokemonType,
  PokemosDetails,
} from '../types';
import Image from 'react-bootstrap/Image';
import { poke1, pokemonSpecies } from '../data';
import { Stack } from 'react-bootstrap';
import { InfoCard } from '../components/Card';

export const PokemonDetails = () => {
  const [details, setDetails] = useState<PokemosDetails>();
  const [species, setSpecies] = useState<PokemonSpecies>();
  const [favorite, setFavorite] = useState<{ name: string; image: string }[]>(
    []
  );

  const { name } = useParams();
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ];

  const size = (
    <>
      <span>Height: {details?.height}</span>
      <span>Weight: {details?.weight}</span>
    </>
  );

  const types = details?.types?.map((type: PokemonType) => (
    <span key={type.type.name}>{type.type.name}</span>
  ));

  const abilities = details?.abilities?.map((ability: PokemonAbility) => (
    <span key={ability.ability.name}>
      {ability.ability.name}
      {ability.is_hidden && (
        <FaLock
          title="Hidden Ability"
          size={20}
          className="red-icon hidden-ability"
        />
      )}
    </span>
  ));

  const toggleLike = () => {
    if (!details) return;
    const isLiked = favorite.some((p) => p.name === details.name);

    if (isLiked) {
      setFavorite((prev) => prev.filter((p) => p.name !== details.name));
    } else {
      setFavorite((prev) => [
        ...prev,
        {
          name: details.name,
          image: details.sprites.other.dream_world.front_default,
        },
      ]);
    }
  };

  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        if (!name) return;
        // const detailsResponse = await getPokemonDetails(name);
        // setDetails(detailsResponse);
        // const speciesResponse = await getSpeciesInfo(name);
        // setSpecies(speciesResponse);
        setDetails(poke1);
        setSpecies(pokemonSpecies);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonInfo();
  }, [name]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorite(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorite));
  }, [favorite]);

  const isLiked = favorite.some((p) => p.name === details?.name);

  return (
    <>
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <main className="main">
        <Stack gap={5}>
          <div className="display-flex">
            <h1 className="dexId">#000{details?.id}</h1>
            <h1 className="title">{details?.name}</h1>
            <div className="red-icon" onClick={toggleLike}>
              {isLiked ? (
                <FaHeart title="Favorite" size={48} />
              ) : (
                <FaRegHeart title="Favorite" size={48} />
              )}
            </div>
          </div>

          <div className="display-flex">
            <Image
              src={details?.sprites.other.dream_world.front_default}
              alt={name}
              rounded
            />
            <div className="stats-container">
              <h1>{species?.flavor_text_entries[0].flavor_text}</h1>
              <h1 className="sub-title">Stats</h1>
              {details?.stats.map((stat, index) => (
                <StatsProgressBar
                  key={stat.stat.name}
                  name={stat.stat.name}
                  base={stat.base_stat}
                  color={colors[index % colors.length]}
                />
              ))}
            </div>
          </div>
          <div className="display-flex">
            <InfoCard title="Size" body={size} style={{ width: '30%' }} />
            <InfoCard title="Type" body={types} style={{ width: '30%' }} />
            <InfoCard
              title="Abilities"
              body={abilities}
              style={{ width: '30%' }}
            />
          </div>
        </Stack>
      </main>
    </>
  );
};
