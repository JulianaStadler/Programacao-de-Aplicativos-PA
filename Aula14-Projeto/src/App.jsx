import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import Pokedex from "./pages/pokedex";
import PokedexAll from "./pages/pokedexall";

function App() {
  return (
    <Router>
      <nav style={{background: "#b7b7b7",position: "absolute",color: "#000",top: "0px",left: "0px",width: "calc(100% - 20px)",fontSize: "20px",display: "flex",justifyContent: 'center',gap: "10px",padding: "10px",flexWrap: "wrap"
      }}>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/">Home</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/pokedex">Pokémon Pokédex</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/pokemon">Pokémon</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/all" element={<PokedexAll />} />
      </Routes>
    </Router>
  );
}

export default App;