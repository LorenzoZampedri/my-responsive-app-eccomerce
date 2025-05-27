import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => useContext(CartContext);

// Provider para envolver toda la app
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Agrega un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Disminuye la cantidad o lo elimina si queda en 0
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Elimina un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Limpia completamente el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Valor que se compartirá con los componentes
  const value = {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart, // ← esto era lo que faltaba
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
