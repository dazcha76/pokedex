import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StatsProgressBar } from '../components/ProgressBar';
import { FaRegHeart } from 'react-icons/fa';
import { getPokemonDetails } from '../api';
import type { PokemosDetails } from '../types';

export const PokemonDetails = () => {
  const [details, setDetails] = useState<PokemosDetails>();
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
    const getPokemonList = async () => {
      try {
        if (!name) return;
        const response = await getPokemonDetails(name);
        setDetails(response);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonList();
  }, [name]);

  return (
    <>
      <header className="header">
        <h1 onClick={handleClick}>Pokedex</h1>
      </header>
      <main>
        <div className="card-heart">
          <FaRegHeart size={32} />
        </div>
        <h1>Stats</h1>
        {details?.stats.map((stat, index) => (
          <StatsProgressBar
            name={stat.stat.name}
            base={stat.base_stat}
            color={colors[index % colors.length]}
          />
        ))}
      </main>
    </>
  );
};
