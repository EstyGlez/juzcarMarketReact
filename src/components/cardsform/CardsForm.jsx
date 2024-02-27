import React, { useState, useEffect } from 'react';
import './cardsForm.css'
import userService from '../../../userService.js'

const Product = () => {
  const [productos, setProductos] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    stock: '',
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
        price: '',
        description: '',
        category: '',
        image: '',
        stock: '',
      });
      fetchData(); 
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await userService.deleteProduct(productId);
      alert('Producto eliminado exitosamente');
      fetchData(); 
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          required
        />
            <label htmlFor="title">Precio:</label>
        <input
          type="text"
          id="title"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
            <label htmlFor="title">Descripción:</label>
        <input
          type="text"
          id="title"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          required
        />
            <label htmlFor="title">Categoría:</label>
        <input
          type="text"
          id="title"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          required
        />
            <label htmlFor="title">Imagen:</label>
        <input
          type="text"
          id="title"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          required
        />
            <label htmlFor="title">Stock:</label>
        <input
          type="text"
          id="title"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          required
        />
    


        <button type="submit">Agregar Proucto</button>
      </form>


      {productos.map((producto) => (
        <div key={producto.id} className="product-card">
          <h3>{producto.title}</h3>
          <p>Precio: {producto.price}</p>
          <p>Descripción: {producto.description}</p>
          <p>Categoría: {producto.category}</p>
          <p>Imagen: {producto.image}</p>
          <p>Stock: {producto.stock}</p>
          <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Product;