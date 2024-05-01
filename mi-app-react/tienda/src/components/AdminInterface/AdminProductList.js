import React from 'react';
import './AdminProduct.css';  // Asegúrate de que este archivo CSS está correctamente enlazado
import products from '../../product.json';

function ProductList() {
    if (!products) {
        return <div>Loading...</div>; // Maneja el estado de carga adecuadamente
    }

    return (
        <div className="product-container">
            <h1>Lista de Productos</h1>
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                      <img src={product.img} alt={product.img}></img>
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>Precio: ${product.price}</p>
                            <p>Stock: {product.stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
