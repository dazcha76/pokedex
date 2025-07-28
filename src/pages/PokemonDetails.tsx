import { useNavigate } from 'react-router-dom';
import { StatsProgressBar } from '../components/ProgressBar';

export const PokemonDetails = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <header className="header">
        <h1 onClick={handleClick}>Pokedex</h1>
      </header>
      <main className="main">
        <h1>Stats</h1>
        <StatsProgressBar name="HP" base={45} color="primary" />
        <StatsProgressBar name="Attack" base={49} color="secondary" />
        <StatsProgressBar name="Defense" base={49} color="success" />
        <StatsProgressBar name="Special Attack" base={65} color="danger" />
        <StatsProgressBar name="Special Defense" base={65} color="warning" />
        <StatsProgressBar name="Speed" base={45} color="info" />
      </main>
    </>
  );
};
