import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

type CardProps = {
  title?: string;
  image?: string;
  body?: React.ReactNode;
  style?: React.CSSProperties;
};

export const InfoCard = ({ title, image, body, style }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${title}`);
  };

  return (
    <Card className="card" style={style} onClick={handleClick}>
      {image && (
        <Card.Img
          className="card-image"
          variant="top"
          src={image}
          alt={title}
        />
      )}
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="display-flex">{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
