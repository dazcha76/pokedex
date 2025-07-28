import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

type CardProps = {
  name: string;
  image: string;
};

export const PokemonCard = ({ name, image }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <Card className="card" onClick={handleClick}>
      <Card.Img className="card-image" variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
