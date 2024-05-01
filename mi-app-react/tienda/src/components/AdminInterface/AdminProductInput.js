import React, { useState, useEffect } from 'react';
import './AdminProduct.css'; // Estilo del componente

function AdminProductForm({ product: initialProduct = { name: '', price: 0, stock: 0 }, onSaveProduct }) {
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    setProduct(initialProduct);  // Se carga el producto inicial cuando el componente recibe un producto para editar
  }, [initialProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProduct(product); // Esta función podría agregar o actualizar el producto
    setProduct({ name: '', price: 0, stock: 0 }); // Resetear formulario si es necesario
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Ingresa un producto</h2>
      <label>
        Nombre:
        <input name="name" value={product.name} onChange={handleChange} placeholder="Nombre del producto" />
      </label>
      <label>
        Precio:
        <input name="price" type="text"  onChange={handleChange} placeholder="Precio" />
      </label>
      <label>
        Stock:
        <input name="stock" type="text"  onChange={handleChange} placeholder="Stock" />
      </label>
      <label>
        Imagen
        <input name="image" type="text"  onChange={handleChange} placeholder="Url-imagen" />
      </label>
      <button type="submit">{initialProduct.id ? 'Modificar Producto' : 'Agregar Producto'}</button>
    </form>
  );
}

export default AdminProductForm;
