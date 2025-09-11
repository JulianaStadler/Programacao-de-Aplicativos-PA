import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Atv1 from "./pages/atv1";
import Atv2 from "./pages/atv2";

function App() {
  return (
    <Router>
      <nav style={{background: "#b7b7b7",position: "absolute",color: "#000",top: "0px",left: "0px",width: "calc(100% - 20px)",fontSize: "20px",display: "flex",justifyContent: 'center',gap: "10px",padding: "10px",flexWrap: "wrap"
      }}>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/">Home</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/atv1">1. Cartão de Perfil</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/atv2">2. Botão customizado</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atv1" element={<Atv1 />} />
        <Route path="/Atv2" element={<Atv2 />} />
      </Routes>
    </Router>
  );
}

export default App;