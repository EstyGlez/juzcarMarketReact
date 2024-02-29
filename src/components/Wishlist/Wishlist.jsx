import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../ProductModal/ProductModal";
import "./Wishlist.css";

// Componente de Producto
function ProductCard({
  imageUrl,
  name,
  price,
  description,
  addToFavorites,
  removeFromFavorites,
  isLiked,
  onProductSelect,
}) {
  const handleLikeClick = () => {
    if (isLiked) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ imageUrl, name, price });
    }
  };

  return (
    <div
      className="product-card"
      onClick={() => onProductSelect({ imageUrl, name, price, description })}
    >
      <img src={imageUrl} alt="Producto" className="product-image" />
      <h5>{name}</h5>
      <p>{price}</p>
      <button className="heart-button" onClick={handleLikeClick}>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: isLiked ? "#FF635E" : "#44BAD3" }}
        />
      </button>
      <FontAwesomeIcon
        icon={faShoppingCart}
        style={{ marginLeft: "10px", color: "#44BAD3" }}
      />
    </div>
  );
}

function Wishlist() {
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (productName) => {
    const updatedFavorites = favorites.filter(
      (item) => item.name !== productName
    );
    setFavorites(updatedFavorites);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Productos más vendidos este mes</h1>
      <div className="best-sellers">
        <ProductCard
          imageUrl="https://i.postimg.cc/TPmwVpvy/bodybeb.jpg"
          name="Body bebé pitufo"
          price="20,00€"
          description="Soy la descripcion 1"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some((item) => item.name === "Body bebé pitufo")}
          onProductSelect={handleProductSelect}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/JnJt3xSC/peluchepitufo.jpg"
          name="Peluche pitufo"
          price="30,00€"
          description="Soy la descripcion 2"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some((item) => item.name === "Peluche pitufo")}
          onProductSelect={handleProductSelect}
        />
        <ProductCard
          imageUrl="https://i.postimg.cc/fTLRHHhQ/figurapitufina.jpg"
          name="Figura pitufina"
          price="15,00€"
          description="Soy la descripcion 3"
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isLiked={favorites.some((item) => item.name === "Figura pitufina")}
          onProductSelect={handleProductSelect}
        />
      </div>
      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}
      <div>
        <h1>Mis Favoritos</h1>
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "50px" }}
              />
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
