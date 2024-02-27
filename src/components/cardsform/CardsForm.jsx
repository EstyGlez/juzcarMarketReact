import React, { useState, useEffect } from 'react';
import './cardsForm.css'
import userService from '../../../userService.js'

const Product = () => {
  const [productos, setProductos] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    stock: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsData = await userService.getAllProducts();
      setProductos(productsData);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.addProduct(newProduct);
      alert('Producto agregado exitosamente');
      setNewProduct({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        stock: 0
      });
      fetchData(); // Actualizar la lista de productos después de agregar uno nuevo
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await userService.deleteProduct(productId);
      alert('Producto eliminado exitosamente');
      fetchData(); // Actualizar la lista de productos después de eliminar uno
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <div>
      {/* Formulario para subir productos */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          required
        />
        {/* Otros campos del producto */}
        <button type="submit">Agregar Producto</button>
      </form>

      {/* Renderizar las tarjetas de productos */}
      {productos.map((producto) => (
        <div key={producto.id} className="product-card">
          <h3>{producto.title}</h3>
          <p>Precio: {producto.price}</p>
          <p>Descripción: {producto.description}</p>
          <p>Categoría: {producto.category}</p>
          {/* Agregar botones de editar y eliminar */}
          <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Product;