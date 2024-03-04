import { expect, describe, it } from "vitest";
import userService from "../../userService";

describe('userService test', () => {
  it("userService has getAllUsers function", () => {
    expect(typeof userService.getAllUsers).toBe('function');
  });
});

describe('userService test', () => {
  it("userService has getAllUsers function", () => {
    expect(typeof userService.getAllUsers).toBe('function');
  });

  it("userService has addUser function", () => {
    expect(typeof userService.addUser).toBe('function');
    // Test para verificar que se pueda agregar un usuario de forma correcta 
    // En el primer test, después de agregar un usuario con el addUser, verifico que el usuario devuelto tenga los datos correctos.
    return userService.addUser({ name: "TestUser", email: "test@example.com" })
      .then(newUser => {
        expect(newUser).toBeDefined();
        expect(newUser.name).toBe("TestUser");
        expect(newUser.email).toBe("test@example.com");
      });
  });

  it("userService has getAllProducts function", () => {
    expect(typeof userService.getAllProducts).toBe('function');
    // Test para verificar que yo obtenga los productos
    //En este otro test, después de llamar a getAllProducts, verifico que el resultado sea un array 
    return userService.getAllProducts()
      .then(products => {
        expect(Array.isArray(products)).toBe(true);
        // Aquí puedes agregar más expectativas según la estructura de datos esperada
      });
  });
});