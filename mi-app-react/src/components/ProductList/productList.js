import React, { useState, useEffect } from 'react';
import './productList.css'; 
import productsData from '../../product.json';
import { useCart } from './../ShoppingCart/cartContex'; 

function ProductList() {
    const { addToCart } = useCart(); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        const loadProducts = () => {
            setProducts(productsData);
            setLoading(false); 
        };

        loadProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-container">
            <h1>Lista de Productos</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>Precio: ${product.price}</p>
                            <p>Stock: {product.stock}</p>
                            <p>Descripción: {product.description}</p>
                            <button onClick={() => addToCart(product)}>Añadir al carrito</button> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
