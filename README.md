# pokedex

## Description
An interactive Pokédex dashboard that lets you explore all available Pokémon. Browse through the full list and click on any Pokémon to view detailed information. You can also mark your favorite Pokémon and view them all in a dedicated Favorites page.

## Live Site
Check out the live version here: [https://pokemon-pokidex.netlify.app](https://pokemon-pokidex.netlify.app)

## Technologies
- React v. 19 via Vite
- Axios
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Features
- View a list of all available Pokémon
- Navigate to a detailed page for each Pokémon
- Display key details: description, height, weight, type, abilities, and base stats
- Mark/unmark Pokémon as favorites
- View a separate list of favorite Pokémon

## Implementation
- Fetch and display data from [PokéAPI](https://pokeapi.co/)
- Implement client-side routing for navigation between pages
- Use local storage to persist the list of favorite Pokémon across sessions
- Display skeleton loaders while data is being fetched to enhance user experience
- Responsive and user-friendly UI

## Installation
- Clone the repository and cd into the project folder
- Install dependencies: `npm install`
- Start the development server: `npm start`
- Open your browser and navigate to the local address provided
