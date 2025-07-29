import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StatsProgressBar } from '../components/ProgressBar';
import { FaRegHeart } from 'react-icons/fa';
// import { getPokemonDetails, getSpeciesInfo } from '../api';
import type { PokemonSpecies, PokemosDetails } from '../types';
import Image from 'react-bootstrap/Image';
import { poke1, pokemonSpecies } from '../data';

export const PokemonDetails = () => {
  const [details, setDetails] = useState<PokemosDetails>();
  const [species, setSpecies] = useState<PokemonSpecies>();
  const navigate = useNavigate();
  const { name } = useParams();
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ];

  const handleClick = () => {
    navigate('/');
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

  return (
    <>
      <header className="header">
        <h1 onClick={handleClick}>Pokedex</h1>
      </header>
      <main className="main">
        <div className="display-flex">
          <h1 className="name">{name}</h1>
          <h1 className="dexId">#000{details?.id}</h1>
          <div className="heart">
            <FaRegHeart size={48} />
          </div>
        </div>
        <div className="display-flex">
          <Image
            width={800}
            src={details?.sprites.other.dream_world.front_default}
            alt={name}
            rounded
          />
          <div>
            <h1>{species?.flavor_text_entries[0].flavor_text}</h1>
            <h1>Height: {details?.height}</h1>
            <h1>Weight: {details?.weight}</h1>
          </div>
        </div>
        <h1>Stats</h1>
        {details?.stats.map((stat, index) => (
          <StatsProgressBar
            key={stat.stat.name}
            name={stat.stat.name}
            base={stat.base_stat}
            color={colors[index % colors.length]}
          />
        ))}
      </main>
    </>
  );
};
