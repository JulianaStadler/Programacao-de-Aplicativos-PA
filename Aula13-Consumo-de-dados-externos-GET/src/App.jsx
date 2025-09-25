import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

import Home from "./pages/home";
import Cat from "./pages/cat";
import Pokemon from "./pages/pokemon";

function App() {
  return (
    <Router>
      <nav style={{background: "#b7b7b7",position: "absolute",color: "#000",top: "0px",left: "0px",width: "calc(100% - 20px)",fontSize: "20px",display: "flex",justifyContent: 'center',gap: "10px",padding: "10px",flexWrap: "wrap"
      }}>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/">Home</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/cat">Cat</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/pokemon">Pokemon</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;