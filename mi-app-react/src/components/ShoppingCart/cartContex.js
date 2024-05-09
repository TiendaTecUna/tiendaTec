// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const exist = prevItems.find(item => item.id === product.id);
            if (exist) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                alert(`Añadiste ${product.name} al carrito.`);
                return [...prevItems, { ...product, qty: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCartItems(prevItems => {
            const exist = prevItems.find(item => item.id === product.id);
            if (exist.qty === 1) {
                return prevItems.filter(item => item.id !== product.id);
            } else {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty - 1 } : item
                );
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
