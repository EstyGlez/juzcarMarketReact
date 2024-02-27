import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Carousel1 from "../../Carousel/Carousel";
import './Homeview.css';
import CardsForm from '../../cardsform/CardsForm.jsx';

// Componente de Producto
function ProductCard({ imageUrl, name, price, addToFavorites, removeFromFavorites, isLiked }) {
  const handleLikeClick = () => {
    if (isLiked) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ imageUrl, name, price });
    }
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt="Producto" className="product-image" />
      <h5>{name}</h5>
      <p>{price}</p>
      <button className="heart-button" onClick={handleLikeClick}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isLiked ? '#FF635E' : '#44BAD3' }} />
      </button>
      <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '10px', color: '#44BAD3' }} />
    </div>
  );
}

// Componente de la Vista Principal
function HomeView() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (productName) => {
    const updatedFavorites = favorites.filter(item => item.name !== productName);
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <Carousel1 />
      <img src="https://i.postimg.cc/nrxdhNkC/alcalde-1-1.png" alt="" />
      <h1>Productos más vendidos este mes</h1>
      <div className="best-sellers">
        {/* Renderizar instancias separadas de ProductCard para cada producto */}
        <ProductCard
          imageUrl="https://i.postimg.cc/TPmwVpvy/bodybeb.jpg"
          name="Body bebé pitufo"
          price="20,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Body bebé pitufo")}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/JnJt3xSC/peluchepitufo.jpg"
          name="Peluche pitufo"
          price="30,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Peluche pitufo")}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/fTLRHHhQ/figurapitufina.jpg"
          name="Figura pitufina"
          price="15,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Figura pitufina")}
        />
      </div>
      <div>
        <h2>Mis Favoritos</h2>
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '50px' }} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomeView;
