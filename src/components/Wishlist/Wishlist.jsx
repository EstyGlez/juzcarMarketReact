import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Wishlist.css';
import { products, newproduct } from './Wishlist.const';
import ProductModal from '../ProductModal/ProductModal';

function ProductCard({ imageUrl, name, price, addToFavorites, removeFromFavorites, isLiked, openModal }) {
  const handleLikeClick = () => {
    if (isLiked) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ imageUrl, name, price });
      Swal.fire({
        title: "Pitufoso!",
        text: "Producto agregado a favoritos.",
        imageUrl: "https://i.postimg.cc/9fFwbw1t/5a1be4e0aec484-0138718815117775047159-1.png",
        imageWidth: 60,
        imageHeight: 110,
        imageAlt: "Custom image"
      });
    }
  };

  const handleCartClick = () => {
    Swal.fire({
      imageUrl: "https://i.postimg.cc/SsxJhnPQ/kisspng-grouchy-smurf-brainy-smurf-gutsy-smurf-gargamel-sm-smurfs-5ac28a9fce4612-6096295315226989118.png",
      imageWidth: 75,
      imageHeight: 110,
      title: '¡Aún no has iniciado sesión!',
      text: 'Por favor, inicia sesión para acceder al carrito.',
      showConfirmButton: true,
    });
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt="Producto" className="image-product" />
      <h5 className="product-info">{name}</h5>
      <p>{price}</p>
      <div className="card-btn">
        <button className="heart-button" onClick={handleLikeClick}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: isLiked ? "#FF635E" : "#44BAD3" }}
          />
        </button>
        <button className="cart-button" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#44BAD3" }} />
        </button>
        <button
          className="plus-button"
          onClick={() => openModal({ imageUrl, name, price })}
        >
          <FontAwesomeIcon icon={faPlus} style={{ color: "#44BAD3" }} />
        </button>
      </div>
    </div>
  );
}

function Wishlist() {
  const [favorites, setFavorites] = React.useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const addToFavorites = (product) => {
    setFavorites(prevFavorites => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productName) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.name !== productName));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <h2>Productos más vendidos este mes</h2>
      <div className="best-sellers">
        {products.map((product) => {
          return (
            <ProductCard
              imageUrl={product.imageURL}
              name={product.name}
              price={product.price}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isLiked={favorites.some((item) => item.name === product.name)}
              openModal={openModal}
            />
          );
        })}
      </div>

      <h2>Productos recientemente añadidos</h2>
      <div className="new-product">
        {newproduct.map((newproduct) => {
          return (
            <ProductCard
              imageUrl={newproduct.imageURL}
              name={newproduct.name}
              price={newproduct.price}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isLiked={favorites.some((item) => item.name === newproduct.name)}
              openModal={openModal}
            />
          );
        })}
      </div>

      {showModal && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}

      <h2>Mis Favoritos</h2>
      <div className="fav-products-form">
        <div
          className={`fav-product ${
            favorites.length > 0 ? "with-favorites" : ""
          }`}
        >
          <ul>
            {favorites.map((item, index) => (
              <li key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "60px" }}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}


export default Wishlist;
