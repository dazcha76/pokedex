import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NavBar } from '../components/Navigation';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
