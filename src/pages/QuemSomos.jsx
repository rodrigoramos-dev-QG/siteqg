import React from 'react';
import './QuemSomos.css'; // Vamos criar este arquivo para estilizar a página

// Você pode colocar uma imagem da empresa na pasta /src/assets
// import fotoEmpresa from '../assets/foto-da-empresa.jpg';

const QuemSomos = () => {
  return (
    <div className="quem-somos-container">
      <div className="quem-somos-texto">
        <h1>Nossa História</h1>
        <p>
          Fundada com a paixão por oferecer produtos de qualidade, a Queiroz & Guarilha 
          nasceu da união de experiências e do desejo de inovar no mercado. 
          Nossa missão é conectar o campo à sua mesa com excelência e confiança.
        </p>
        <p>
          Com uma equipe dedicada e uma logística eficiente, garantimos que cada produto 
          mantenha seu frescor e suas propriedades, atendendo às mais altas exigências 
          de nossos clientes, desde restaurantes renomados a hotéis e cozinhas industriais.
        </p>
      </div>
      <div className="quem-somos-imagem">
        {/* <img src={fotoEmpresa} alt="Equipe ou instalações da Queiroz & Guarilha" /> */}
        <div className="imagem-placeholder">
          <p>Espaço para uma imagem da empresa</p>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;