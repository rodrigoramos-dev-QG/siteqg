import React, { useState } from 'react';
// CORREÇÃO: O caminho foi atualizado de 'fa' para 'fa6'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6'; 
import './Contato.css';

const Contato = () => {
  // Estados para armazenar os dados do formulário
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    const companyPhoneNumber = '5521968132839'; // Número da empresa com código do país (55 para Brasil)

    // Monta a mensagem formatada
    const message = `Olá! Gostaria de fazer um contato.\n\n*Nome:* ${name}\n*Endereço:* ${address}\n*Telefone:* ${phone}`;

    // Codifica a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${companyPhoneNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">
            Estamos prontos para atender você. Preencha o formulário ao lado ou fale conosco através de nossos canais.
          </p>
          
          <div className="social-links">
            <a href="https://wa.me/5521968132839" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <FaWhatsapp size={30} />
              <span>WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/SEU_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram size={30} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2 className="map-title">Nossa Localização</h2>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d620.5423710204171!2d-42.791462172745966!3d-22.271520072824696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1752500274051!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Queiroz & Guarilha"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contato;
