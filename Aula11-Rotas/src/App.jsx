import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Atv1 from "./pages/atv1";
import Atv2 from "./pages/atv2";
import Ex1 from "./pages/ex1";
import Ex2 from "./pages/ex2";
import Ex3 from "./pages/ex3";
import Ex4 from "./pages/ex4";

function App() {
  return (
    <Router>
      <nav style={{background: "#b7b7b7",position: "absolute",color: "#000",top: "0px",left: "0px",width: "calc(100% - 20px)",fontSize: "20px",display: "flex",justifyContent: 'center',gap: "10px",padding: "10px",flexWrap: "wrap"
      }}>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/">Home</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/atv1/Juliana">Rota 1</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/atv2/">Rota 2</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/users/10">Página de usuário simples</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/products/eletronicos/55">Dois parâmetros na URL</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/ex3">Rota condicional</Link>
        <Link style={{color: "black", border: "1px solid black", padding: "5px 10px", boxSizing: "border-box", display: "block"}} to="/ex4">Link dinâmico</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv1/:nome" element={<Atv1 />} />
        <Route path="/atv2/" element={<Atv2 />} />
        <Route path="/users/:id" element={<Ex1 />} />
        <Route path="/products/:category/:id" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/ex4" element={<Ex4 />} />
      </Routes>
    </Router>
  );
}

export default App;