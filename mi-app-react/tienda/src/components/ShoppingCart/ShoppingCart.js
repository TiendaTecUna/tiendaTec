import React, { useState } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    // Agrega productos al carrito
    const addToCart = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            // Aumentar la cantidad
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
                )
            );
        } else {
            // Agregar nuevo producto al carrito
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    // Remover productos del carrito
    const removeFromCart = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
                )
            );
        }
    };

    return (
        <div>
            <h2>Tu carrito de compras</h2>
            <div>
                {cartItems.length === 0 && <div>Selecciona productas, tu carrito esta vacio</div>}
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <div>Qty: {item.qty}</div>
                        <div>Price: ${item.price}</div>
                        <button onClick={() => addToCart(item)}>+</button>
                        <button onClick={() => removeFromCart(item)}>-</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingCart;
