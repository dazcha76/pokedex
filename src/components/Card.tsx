import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useSentenceCase } from '../hooks/useSentenceCase';

type CardProps = {
  title: string;
  image: string;
};

export const InfoCard = ({ title, image }: CardProps) => {
  const navigate = useNavigate();
  const sentenceCase = useSentenceCase();

  const handleCardClick = () => {
    navigate(`/${title}`);
  };

  return (
    <Card className="card" onClick={handleCardClick}>
      {image && (
        <Card.Img
          className="card-image"
          variant="top"
          src={image}
          alt={title}
        />
      )}
      <Card.Body>
        <Card.Title className="card-title">{sentenceCase(title)}</Card.Title>
      </Card.Body>
    </Card>
  );
};
