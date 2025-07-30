import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StatsProgressBar } from '../components/ProgressBar';
import { FaHeart, FaLock, FaRegHeart } from 'react-icons/fa';
import { getPokemonDetails, getSpeciesInfo } from '../api';
import type {
  PokemonAbility,
  PokemonSpecies,
  PokemonType,
  PokemosDetails,
} from '../types';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { useSentenceCase } from '../hooks/useSentenceCase';

export const PokemonDetails = () => {
  const [details, setDetails] = useState<PokemosDetails>();
  const [species, setSpecies] = useState<PokemonSpecies>();
  const [favorite, setFavorite] = useState<{ name: string; image: string }[]>(
    []
  );
  const { name } = useParams();
  const sentenceCase = useSentenceCase();
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ];

  // Search for the first description in English
  const flavorText =
    species?.flavor_text_entries.find((entry) => entry.language.name === 'en')
      ?.flavor_text || '';

  const size = (
    <>
      <p>Height: {details?.height}</p>
      <p>Weight: {details?.weight}</p>
    </>
  );

  // Extract individual values from 'Types'
  const types = details?.types?.map((type: PokemonType) => (
    <p key={type.type.name}>{sentenceCase(type.type.name)}</p>
  ));

  // Extract individual values from 'Abilities'
  const abilities = details?.abilities?.map((ability: PokemonAbility) => (
    <p key={ability.ability.name}>
      {sentenceCase(ability.ability.name)}
      {ability.is_hidden && (
        <FaLock
          title="Hidden Ability"
          size={20}
          className="icon hidden-ability"
        />
      )}
    </p>
  ));

  const toggleFavorite = () => {
    if (!details) return;
    // Checks if a Pokémon is already in the favorites array
    const isLiked = favorite.some((pokemon) => pokemon.name === details.name);

    if (isLiked) {
      // If it is, remove it
      setFavorite((prev) =>
        prev.filter((pokemon) => pokemon.name !== details.name)
      );
    } else {
      // If it isn't, keep all previous favorites and add the new one
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
        // Get most Pokémon details
        const detailsResponse = await getPokemonDetails(name);
        setDetails(detailsResponse);
        // Get the Pokémon's description
        const speciesResponse = await getSpeciesInfo(name);
        setSpecies(speciesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemonInfo();
  }, [name]);

  useEffect(() => {
    // Retrieve favorite Pokémons from localstorage
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorite(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Save favorite Pokémon to localstorage
    localStorage.setItem('favorites', JSON.stringify(favorite));
  }, [favorite]);

  const isLiked = favorite.some((pokemon) => pokemon.name === details?.name);

  return (
    <main>
      <div className="details-page padding display-flex">
        <h1 className="dexId">#{details?.id.toString().padStart(4, '0')}</h1>
        <h1 className="details-title">{sentenceCase(details?.name)}</h1>
        <div className="icon hearts" onClick={toggleFavorite}>
          {isLiked ? (
            <FaHeart title="Favorite" size={30} />
          ) : (
            <FaRegHeart title="Favorite" size={30} />
          )}
        </div>
      </div>

      <Stack gap={5}>
        <p className="padding">{flavorText}</p>
        <Container fluid>
          <Row>
            <Col xs={12} md={3} className="image-column">
              <Image
                src={details?.sprites.other.dream_world.front_default}
                alt={name}
                rounded
                fluid
              />
            </Col>
            <Col xs={12} md={3}>
              <div className="detail-container">
                <h1 className="sub-title">Size</h1>
                {size}
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="detail-container">
                <h1 className="sub-title">Type</h1>
                {types}
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="detail-container">
                <h1 className="sub-title">Abilities</h1>
                {abilities}
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <h1 className="sub-title padding">Stats</h1>
          {details?.stats.map((stat, index) => (
            <StatsProgressBar
              key={stat.stat.name}
              name={stat.stat.name}
              base={stat.base_stat}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </Stack>
    </main>
  );
};
