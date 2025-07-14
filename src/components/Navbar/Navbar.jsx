// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import logo from "../../assets/logo-qg.png"; // Certifique-se de que o caminho está correto

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo fica na esquerda */}
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo Queiroz & Guarilha" />
          </NavLink>
        </div>

        {/* Todos os links de navegação ficam juntos */}
        <ul className="navbar-links">
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/quem-somos">QUEM SOMOS</NavLink></li>
          <li><NavLink to="/produtos">PRODUTOS</NavLink></li>
          <li><NavLink to="/contato">CONTATO</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;