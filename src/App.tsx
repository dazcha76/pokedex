import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokemonList } from './pages/PokemonList';
import { PokemonDetails } from './pages/PokemonDetails';
import { FavoritePokemons } from './pages/FavoritePokemons';

const router = createBrowserRouter([
  { path: '/', element: <PokemonList /> },
  { path: '/:name', element: <PokemonDetails /> },
  { path: '/favorites', element: <FavoritePokemons /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
