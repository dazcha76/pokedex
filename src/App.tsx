import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokemonList } from './pages/PokemonList';
import { PokemonDetails } from './pages/PokemonDetails';

const router = createBrowserRouter([
  { path: '/', element: <PokemonList /> },
  { path: '/details', element: <PokemonDetails /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
