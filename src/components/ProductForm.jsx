import React, { useState } from 'react';

function ProductForm() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productName,
      description,
      image,
      price
    };
    setProducts([...products, newProduct]);
    setProductName('');
    setDescription('');
    setImage('');
    setPrice('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Producto:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Imagen:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Precio:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>
      <div>
        <h2>Productos Agregados:</h2>
        {products.map((product, index) => (
          <div key={index}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.productName} />
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductForm;
