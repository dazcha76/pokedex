import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from 'react-icons/fa';

type CardProps = {
  name: string;
  image: string;
};

export const PokemonCard = ({ name, image }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details');
  };

  return (
    <Card className="card" onClick={handleClick}>
      <Card.Img className="card-image" variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <div className="card-heart">
          <FaRegHeart size={32} />
        </div>
      </Card.Body>
    </Card>
  );
};
