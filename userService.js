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
};

export default userService;