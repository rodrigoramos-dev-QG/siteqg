// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Vamos criar este arquivo!

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'; // 1. Importe o Footer

import Home from './pages/Home.jsx';
import QuemSomos from './pages/QuemSomos.jsx';
import Produtos from './pages/Produtos.jsx';
import Contato from './pages/Contato.jsx';

function App() {
  return (
    <Router>
      {/* 2. Adicione uma div container */}
      <div className="site-container"> 
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer /> {/* 3. Adicione o Footer no final */}
      </div>
    </Router>
  );
}

export default App;