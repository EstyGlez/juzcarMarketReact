import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Wishlist.css';

// Componente de Producto
function ProductCard({ imageUrl, name, price, addToFavorites, removeFromFavorites, isLiked }) {
  const handleLikeClick = () => {
    if (isLiked) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ imageUrl, name, price });
    }
  };

  const handleCartClick = () => {
    openLoginModal();
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt="Producto" className="image-product" />
      <h5 className="product-info">{name}</h5>
      <p>{price}</p>
      <button className="heart-button" onClick={handleLikeClick}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isLiked ? '#FF635E' : '#44BAD3' }} />
      </button>
      <button className="cart-button" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '10px', color: '#44BAD3' }} />
      </button>
    </div>
  );
}

function Wishlist() {
  const [favorites, setFavorites] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const addToFavorites = (product) => {
    setFavorites(prevFavorites => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productName) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.name !== productName));
  };

  return (
    <>
      <h2>Productos más vendidos este mes</h2>
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
        <ProductCard
          imageUrl=" https://i.postimg.cc/sXr2ws3T/camisetahombre.jpg"
          name="Camiseta negra de hombre"
          price="10,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Remera pitufo")}
        />
      </div>

      <h2>Productos recientemente añadidos</h2>
       <div className='new-add'>
        <ProductCard
          imageUrl="https://i.postimg.cc/G2xmfV2d/camisetamujer.jpg"
          name="Camiseta negra de mujer"
          price="12,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Remera pitufa")}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/C5Mxp7BD/colecci-nfiguras.jpg"
          name="Colección de figuras"
          price="16,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Figuras pitufos")}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/T1kYdbgs/figuracocina.jpg"
          name="Figura pitufo con cocina"
          price="12,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Cocina pitufo")}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/ZY8CCfrr/tazapaisajepitufo.png"
          name="Taza de paisaje con pitufo"
          price="12,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Paisaje pitufo")}
        />
       </div>

      <div>
        <h3>Mis Favoritos</h3>
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

export default Wishlist;