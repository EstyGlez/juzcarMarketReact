const API_URL = 'http://localhost:3000';

const userService = {
  getAllUsers: async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al obtener los usuarios');
    }
  },

  addUser: async (user) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al registrar el usuario');
    }
  },

  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_URL}/Products`);
      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al obtener los productos');
    }
  },

  addProduct: async (product) => {
    try {
      const response = await fetch(`${API_URL}/Products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Error al agregar el producto');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al agregar el producto');
    }
  },

  updateProduct: async (productId, updatedProduct) => {
    try {
      const response = await fetch(`${API_URL}/Products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al actualizar el producto');
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await fetch(`${API_URL}/Products/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el producto');
      }
      return true;
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al eliminar el producto');
    }
  },
};

export default userService;
