# Pokedex

Welcome to Pokedex, a personal project developed by me to showcase React skills and explore the world of Pokémon! This React-based web application allows you to browse through a comprehensive list of Pokémon, view their details, and even search for specific ones.


## Features

- **Homepage**: Browse through a list of Pokémon displayed as cards. A search bar is available for finding a specific Pokémon quickly.
  
- **PokemonDetails Page**: Click on a Pokémon card or use the search bar to view detailed information about a specific Pokémon, including its ID, Name, Base Experience, Height, Order, and Weight.

- **React Bootstrap Styling**: Styled using the React Bootstrap library for a sleek and responsive design.

- **React Router**: Utilized React Router for seamless navigation between the homepage and Pokémon details page.

- **pokeapi.co Backend**: Leveraged the pokeapi.co API to fetch Pokémon data and provide up-to-date information.

- **Axios for API Requests**: Used Axios to handle HTTP requests for fetching data from the pokeapi.co backend.

- **Search Functionality**: Implemented search functionality by typing the whole name of the Pokémon in the URL, which automatically redirects to the Pokémon details page. If the Pokémon is not found, a "Pokemon not found" message is displayed.

- **useDebounce Custom Hook**: Utilized a custom hook named `useDebounce` to enhance search functionality by debouncing user input.

- **Built with Vite**: Developed using Vite for a fast and efficient development experience.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server locally using `npm run dev` (built with Vite).
4. Start searching for your favorite pokemons and enjoy exploring!