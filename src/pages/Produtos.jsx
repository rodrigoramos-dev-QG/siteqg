import React, { useState } from 'react';
import './Produtos.css';
import beterrabaImg from '../assets/produtos/beterraba.jpg'
// --- Base de Dados dos Produtos ---
// Quando você tiver as imagens, substitua o caminho em 'image' para cada produto.
const allProducts = [
  // Alfaces
  { id: 1, name: 'Alface Crespa', category: 'Alfaces', image: null },
  { id: 2, name: 'Alface Lisa', category: 'Alfaces', image: null },
  { id: 3, name: 'Alface Americana', category: 'Alfaces', image: null },
  { id: 4, name: 'Alface Roxa', category: 'Alfaces', image: null },
  { id: 5, name: 'Alface Hidropônica', category: 'Alfaces', image: null },
  { id: 6, name: 'Lisa Hidro', category: 'Alfaces', image: null },
  { id: 7, name: 'Roxa Hidro', category: 'Alfaces', image: null },
  { id: 8, name: 'Mista Hidro', category: 'Alfaces', image: null },
  { id: 9, name: 'Friser', category: 'Alfaces', image: null },
  { id: 10, name: 'Romana', category: 'Alfaces', image: null },
  
  // Folhas Diversas
  { id: 11, name: 'Chicória', category: 'Folhas', image: null },
  { id: 12, name: 'Espinafre', category: 'Folhas', image: null },
  { id: 13, name: 'Acelga', category: 'Folhas', image: null },
  { id: 14, name: 'Agrião Comum', category: 'Folhas', image: null },
  { id: 15, name: 'Agrião Hidro', category: 'Folhas', image: null },
  { id: 16, name: 'Agrião na Bolsa', category: 'Folhas', image: null },
  { id: 17, name: 'Couve Mineira', category: 'Folhas', image: null },
  { id: 18, name: 'Rúcula', category: 'Folhas', image: null },
  { id: 19, name: 'Rúcula Hidro', category: 'Folhas', image: null },
  { id: 20, name: 'Mostarda', category: 'Folhas', image: null },
  { id: 21, name: 'Serralha', category: 'Folhas', image: null },
  { id: 22, name: 'Radicho', category: 'Folhas', image: null },
  { id: 23, name: 'Taioba', category: 'Folhas', image: null },
  { id: 24, name: 'Almeirão Roxo', category: 'Folhas', image: null },

  // Ervas e Temperos
  { id: 25, name: 'Coentro', category: 'Ervas e Temperos', image: null },
  { id: 26, name: 'Aipo DZ', category: 'Ervas e Temperos', image: null },
  { id: 27, name: 'Alho Poró', category: 'Ervas e Temperos', image: null },
  { id: 28, name: 'Salsa G', category: 'Ervas e Temperos', image: null },
  { id: 29, name: 'Salsinha', category: 'Ervas e Temperos', image: null },
  { id: 30, name: 'Hortelã', category: 'Ervas e Temperos', image: null },
  { id: 31, name: 'Alecrim', category: 'Ervas e Temperos', image: null },
  { id: 32, name: 'Cebolinha', category: 'Ervas e Temperos', image: null },
  { id: 33, name: 'Manjericão', category: 'Ervas e Temperos', image: null },
  { id: 34, name: 'Salvia', category: 'Ervas e Temperos', image: null },
  { id: 35, name: 'Tomilho', category: 'Ervas e Temperos', image: null },
  { id: 36, name: 'Cebolete', category: 'Ervas e Temperos', image: null },
  { id: 37, name: 'Salsa Crespa', category: 'Ervas e Temperos', image: null },
  { id: 38, name: 'Louro', category: 'Ervas e Temperos', image: null },

  // Legumes e Raízes
  { id: 39, name: 'Brócolis Comum', category: 'Legumes e Raízes', image: null },
  { id: 40, name: 'Rabanete', category: 'Legumes e Raízes', image: null },
  { id: 41, name: 'Cebola G', category: 'Legumes e Raízes', image: null },
  { id: 42, name: 'Beterraba', category: 'Legumes e Raízes', image: beterrabaImg },
  { id: 43, name: 'Cenoura', category: 'Legumes e Raízes', image: null },
  { id: 44, name: 'Brócolis Ninja', category: 'Legumes e Raízes', image: null },
  { id: 45, name: 'Tomate BDJ', category: 'Legumes e Raízes', image: null },
  { id: 46, name: 'Repolho Verde', category: 'Legumes e Raízes', image: null },
  { id: 47, name: 'Repolho Roxo', category: 'Legumes e Raízes', image: null },
  { id: 48, name: 'Couve-Flor', category: 'Legumes e Raízes', image: null },
];

const categories = ['Todos', 'Alfaces', 'Folhas', 'Ervas e Temperos', 'Legumes e Raízes'];

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      <h1 className="products-title">Nossos Produtos</h1>
      
      <div className="controls-container">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.image ? (
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                </div>
              ) : (
                <div className="product-image-placeholder">
                  <span>{product.name.charAt(0)}</span>
                </div>
              )}
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))
        ) : (
          <p className="no-results">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Produtos;