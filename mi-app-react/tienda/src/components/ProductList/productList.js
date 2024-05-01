


import React from 'react';

import products from '../../product.json'; // Asegúrate de tener este archivo de CSS en la ruta correcta

function ProductList() {
    if (!products) {
        return <div>Loading...</div>; // O manejar el estado de carga adecuadamente
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
                          <p>Descripción: {product.description}</p>
                          <button>Comprar</button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default ProductList;
