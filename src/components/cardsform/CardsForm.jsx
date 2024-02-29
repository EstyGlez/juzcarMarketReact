import React, { useState, useEffect, useRef } from 'react';
import './cardsForm.css';
import userService from '../../../userService.js';

const Product = () => {
  const [productos, setProductos] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: null,
    stock: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const formRef = useRef(null);

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
      if (newProduct.id) {
        await userService.updateProduct(newProduct.id, newProduct);
        alert('Producto actualizado exitosamente');
      } else {
        await userService.addProduct(newProduct);
        alert('Producto agregado exitosamente');
      }
      setNewProduct({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        stock: '',
      });
      setIsEditing(false); // Cambiar a modo de agregar producto después de guardar
      fetchData();
    } catch (error) {
      console.error('Error al guardar producto:', error);
    }
  };

  const handleEdit = async (productId) => {
    const productToEdit = productos.find((producto) => producto.id === productId);
    setNewProduct(productToEdit);
    setIsEditing(true); // Cambiar a modo de edición al hacer clic en editar
    // Desplazarse hacia el formulario
    formRef.current.scrollIntoView({ behavior: 'smooth' });
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

  const handleCheckboxChange = (categoria) => {
    const isChecked = categoriasSeleccionadas.includes(categoria);
    if (isChecked) {
      setCategoriasSeleccionadas(categoriasSeleccionadas.filter((c) => c !== categoria));
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
    }
  };

  const filteredProductos = productos.filter((producto) => {
    if (categoriasSeleccionadas.length === 0) {
      return true; // Mostrar todos los productos si no se ha seleccionado ninguna categoría
    } else {
      return categoriasSeleccionadas.includes(producto.category);
    }
  });

  const categorias = ['Ropa', 'Juguetes', 'Estatuas']; // Definición de las categorías

  return (
    <div>
      <div className="navbar">
        {categorias.map((categoria) => (
          <div key={categoria} className="navbar-item">
            <input
              type="checkbox"
              id={categoria}
              value={categoria}
              onChange={(e) => handleCheckboxChange(e.target.value)}
            />
            <label htmlFor={categoria}>{categoria}</label>
          </div>
        
        ))}
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
          required
        />
        <label htmlFor="title">Precio:</label>
        <input
          type="text"
          id="title"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          required
        />
        <label htmlFor="title">Descripción:</label>
        <input
          type="text"
          id="title"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          required
        />
        <label htmlFor="title">Categoría:</label>
        <input
          type="text"
          id="title"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
          required
        />

        <label htmlFor="title">Copie la URL de su imagen:</label>
        <input
          type="text"
          id="title"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          required
        />
        {newProduct.image && (
          <img
            src={newProduct.image}
            alt="Previsualización de la imagen"
            style={{ maxWidth: "17%", height: "200px" }}
          />
        )}

        <label htmlFor="title">Stock:</label>
        <input
          type="text"
          id="title"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
          required
        />

        <button type="submit">
          {isEditing ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </form>

      <div className="product-list">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="product-card">
            <h3>{producto.title}</h3>
            <img
              src={producto.image}
              alt={producto.title}
              width={100}
              height={100}
            ></img>
            <p>Precio: {producto.price}€</p>
            <p>Descripción: {producto.description}</p>
            <p>Categoría: {producto.category}</p>

            <p>Stock: {producto.stock}</p>
            <button onClick={() => handleEdit(producto.id)}>Editar</button>
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

