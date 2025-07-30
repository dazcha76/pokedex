import { Card, Placeholder } from 'react-bootstrap';

export const CardSkeleton = () => {
  return (
    <Card className="card-skeleton">
      <Placeholder animation="glow">
        <Placeholder xs={12} style={{ height: '331px' }} />
      </Placeholder>
    </Card>
  );
};
