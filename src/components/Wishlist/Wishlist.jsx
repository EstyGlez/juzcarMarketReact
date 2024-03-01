import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Wishlist.css';
import { products, newproduct } from './Wishlist.const';
import Swal from 'sweetalert2';

function ProductCard({ imageUrl, name, price, addToFavorites, removeFromFavorites, isLiked }) {
  const handleLikeClick = () => {
    if (isLiked) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ imageUrl, name, price });
      Swal.fire({
    html: '<img src="https://i.postimg.cc/NMkNBq0M/pitufo-coqueto.png" style="max-width: 35%;" />',
    title: '¡Producto agregado a tus favoritos!',
    confirmButtonText: 'Aceptar'
  });
    }
  };

  const handleCartClick = () => {
    Swal.fire({
    html: '<img src="https://i.postimg.cc/wjn4kQP6/pitufo-enojado.png" style="max-width: 35%;" />',
    title: '¡Aún no has iniciado sesión!',
    confirmButtonText: 'Aceptar'
  });
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
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#44BAD3' }} />
      </button>
    </div>
  );
}

function Wishlist() {
  const [favorites, setFavorites] = React.useState([]);

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
        {products.map(product => {
          return(
            <ProductCard
          imageUrl={product.imageURL}
          name={product.name}
          price={product.price}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === product.name)}
        />
          )
        })}
        
      </div>

      <h2>Productos recientemente añadidos</h2>
       <div className='new-product'>
        {newproduct.map(newproduct => {
          return(
            <ProductCard
          imageUrl={newproduct.imageURL}
          name={newproduct.name}
          price={newproduct.price}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some(item => item.name === newproduct.name)}
        />
          )
        })}
        
       </div>

      <h3>Mis Favoritos</h3>
      <div className='fav-product'>
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '60px' }} />
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