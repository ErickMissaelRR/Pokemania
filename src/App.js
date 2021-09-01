import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Components/Navbar/Header'
import Floatingbutton from './Components/FloatingButton/Floatingbutton'

import Pokemons from './Components/PokemonList/pokemons'
import Home from './Components/Home/Home'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Floatingbutton />
      <Route exact path="/" component={Home}/>
      <Route exact path="/pokemonlist" component={Pokemons}/>
    </div>
    </Router>
    
  );
}

export default App;
