import React from 'react';
import Header from './Components/Navbar/Header'
import Pokemons from './Components/PokemonList/pokemons'
import Floatingbutton from './Components/FloatingButton/Floatingbutton'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
      <Floatingbutton />
    </div>
  );
}

export default App;
