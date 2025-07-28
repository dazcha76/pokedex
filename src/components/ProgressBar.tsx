import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

type ProgressBarProps = {
  name: string;
  base: number;
  color: string;
};

export const StatsProgressBar = ({ name, base, color }: ProgressBarProps) => {
  return (
    <Container fluid>
      <Row className="stat-row">
        <Col xs={3}>
          <h3>{name}</h3>
        </Col>
        <Col>
          <ProgressBar variant={color} now={base} />
        </Col>
      </Row>
    </Container>
  );
};
