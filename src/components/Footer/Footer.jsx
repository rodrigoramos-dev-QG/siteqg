// src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Queiroz & Guarilha. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;