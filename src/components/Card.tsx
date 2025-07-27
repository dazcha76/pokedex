import Card from 'react-bootstrap/Card';
import { FaRegHeart } from 'react-icons/fa';

type CardProps = {
  name: string;
  image: string;
};

export const PokemonCard = ({ name, image }: CardProps) => {
  return (
    <Card className="card">
      <Card.Img className="card-image" variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="card-heart">
          <FaRegHeart size={32} />
        </div>
      </Card.Body>
    </Card>
  );
};
