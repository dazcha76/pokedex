import { useNavigate } from 'react-router-dom';

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
      <main></main>
    </>
  );
};
