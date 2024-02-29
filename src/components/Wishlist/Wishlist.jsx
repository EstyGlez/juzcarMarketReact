import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Wishlist.css';
import LoginModal from '../LoginModal/Loginmodal';

// Componente de Producto
function ProductCard({ imageUrl, name, price, addToFavorites, removeFromFavorites, isLiked, openLoginModal }) {
  const handleLikeClick = () => {
    if (isLiked) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ imageUrl, name, price });
    }
  };

  const handleCartClick = () => {
    openLoginModal(); // Llama a la función openLoginModal cuando se hace clic en el botón del carrito
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
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (productName) => {
    const updatedFavorites = favorites.filter(item => item.name !== productName);
    setFavorites(updatedFavorites);
  };

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
          openLoginModal={openLoginModal} // Pasar openLoginModal como prop al ProductCard
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/JnJt3xSC/peluchepitufo.jpg"
          name="Peluche pitufo"
          price="30,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Peluche pitufo")}
          openLoginModal={openLoginModal} // Pasar openLoginModal como prop al ProductCard
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/fTLRHHhQ/figurapitufina.jpg"
          name="Figura pitufina"
          price="15,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Figura pitufina")}
          openLoginModal={openLoginModal} // Pasar openLoginModal como prop al ProductCard
        />
        <ProductCard
          imageUrl=" https://i.postimg.cc/sXr2ws3T/camisetahombre.jpg"
          name="Camiseta negra de hombre"
          price="10,00€"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === "Figura pitufina")}
          openLoginModal={openLoginModal} // Pasar openLoginModal como prop al ProductCard
        />
      </div>
      <div>
        <h1>Mis Favoritos</h1>
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '50px' }} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        {isModalOpen && <LoginModal onClose={closeLoginModal} />}
      </div>
    </>
  );
}

export default Wishlist;