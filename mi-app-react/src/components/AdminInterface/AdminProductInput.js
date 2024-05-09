import React, { useState } from 'react';
import './AdminProduct.css'; // Estilo del componente
import { addProduct } from '../ProductList/productManagement';

function AdminProductInput() {
  const [product, setProduct] = useState({
      name: '',
      description: '',
      price: '',
      stock: '',
      image: ''
  });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setProduct(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      // Convert price and stock to proper types before sending
      addProduct({
          ...product,
          price: parseFloat(product.price),
          stock: parseInt(product.stock, 10)
      });
      // Reset the form after submission
      setProduct({ name: '', description: '', price: '', stock: '', image: '' });
      alert('Producto añadido exitosamente!');
  };

  return (
      <form onSubmit={handleSubmit} className="product-form">
          <h2>Añadir un nuevo producto</h2>
          <label>
              Nombre:
              <input
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Nombre del producto"
                  required
              />
          </label>
          <label>
              Descripción:
              <input
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Descripción del producto"
                  required
              />
          </label>
          <label>
              Precio:
              <input
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Precio"
                  required
              />
          </label>
          <label>
              Stock:
              <input
                  name="stock"
                  type="number"
                  min="0"
                  value={product.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  required
              />
          </label>
          <label>
              Imagen URL:
              <input
                  name="image"
                  type="text"
                  value={product.image}
                  onChange={handleChange}
                  placeholder="Url de la imagen"
                  required
              />
          </label>
          <button type="submit">Agregar Producto</button>
      </form>
  );
}

export default AdminProductInput;
