// src/pages/Home.jsx

import React from 'react';
// Importe os componentes da Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Autoplay já está aqui

// Importe os estilos da Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Home.css';

// Importe suas imagens
import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';
import imagem4 from '../assets/imagem4.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Nossos Destaques</h1>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        // --- MUDANÇA AQUI ---
        autoplay={{
          delay: 5000, // 5 segundos
          disableOnInteraction: false, // Continua o autoplay mesmo após interação manual
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Seus slides continuam os mesmos */}
        <SwiperSlide><img src={imagem1} alt="Imagem 1" /></SwiperSlide>
        <SwiperSlide><img src={imagem2} alt="Imagem 2" /></SwiperSlide>
        <SwiperSlide><img src={imagem3} alt="Imagem 3" /></SwiperSlide>
        <SwiperSlide><img src={imagem4} alt="Imagem 4" /></SwiperSlide>
      </Swiper>

      {/* --- NOVO CONTEÚDO GENÉRICO ABAIXO --- */}
      <section className="home-content-section">
        <h2 className="section-title">Qualidade e Compromisso em Cada Entrega</h2>
        <p className="section-text">
          Na Queiroz & Guarilha, nossa paixão é fornecer produtos da mais alta qualidade, 
          selecionados com rigor para atender às necessidades dos nossos parceiros. 
          Acreditamos que a excelência começa na origem, e é por isso que trabalhamos 
          incansavelmente para garantir frescor, sabor e confiança em tudo o que oferecemos.
        </p>
        <p className="section-text">
          Seja para o seu restaurante, hotel ou negócio, estamos aqui para ser mais do que 
          um fornecedor: queremos ser o seu parceiro de sucesso. Explore nossas soluções 
          e descubra como podemos ajudar a elevar a sua operação a um novo patamar.
        </p>
      </section>
    </div>
  );
};

export default Home;