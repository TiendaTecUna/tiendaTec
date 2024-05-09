import React from 'react';
import { useCart } from './cartContex';  // Verifica que la ruta es correcta
import './ShoppingCart.css'
function ShoppingCart() {
    const { cartItems, setCartItems, addToCart, removeFromCart } = useCart();

    const getTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    };

    const handlePurchase = () => {
        alert(`La compra fue realizada con éxito! Total: $${getTotal()}`);
        setCartItems([]);
    };

    return (
        <div>
            <h2>Tu Carrito de Compras</h2>
            <div className='div-products'>
                {cartItems.length === 0 ? (
                    <div>Tu carrito está vacío. Selecciona algunos productos.</div>
                ) : (
                    cartItems.map((item) => (
                        <div className="cart" key={item.id}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                            <div>Cantidad: {item.qty}</div>
                            <div>Precio: ${item.price}</div>
                            <button onClick={() => addToCart(item)}>+</button>
                            <button onClick={() => removeFromCart(item)}>-</button>
                        </div>
                    ))
                )}
            </div>
            <div className='div-container'>
                <div>Total: ${getTotal().toFixed(1)}</div>
                <button onClick={handlePurchase}>Comprar</button>
            </div>
        </div>
    );
}

export default ShoppingCart;
