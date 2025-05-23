import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

    export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Agrega producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
        const itemExists = prevItems.find(item => item.id === product.id);
        if (itemExists) {
            // Suma cantidad si ya está en el carrito
            return prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevItems, { ...product, quantity: 1 }];
        }
        });
    };

    // Disminuye la cantidad de un producto en el carrito, o lo elimina si queda en 0
    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) => {
        return prevItems
            .map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0);
        });
    };

    // Elimina un producto completo del carrito
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const value = { cartItems, addToCart, decreaseQuantity, removeFromCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
    }
