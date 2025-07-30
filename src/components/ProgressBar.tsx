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
        <Col xs={12} md={3}>
          <h2>{name}</h2>
        </Col>
        <Col>
          <ProgressBar
            variant={color}
            now={base}
            label={base}
            className="stats-progress-bar"
          />
        </Col>
      </Row>
    </Container>
  );
};
