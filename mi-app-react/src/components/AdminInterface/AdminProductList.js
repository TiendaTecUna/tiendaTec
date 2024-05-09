import React, { useState, useEffect } from 'react';
import './AdminProduct.css'; // Asegúrate de que este archivo CSS está correctamente enlazado
import initialProducts from '../../product.json'; // Asegúrate de que la ruta al archivo JSON es correcta

function ProductList() {
    const [products, setProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newStock, setNewStock] = useState('');

    useEffect(() => {
        const loadProducts = () => {
            const storedProducts = localStorage.getItem('products');
            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            } else {
                localStorage.setItem('products', JSON.stringify(initialProducts));
                setProducts(initialProducts);
            }
        };

        loadProducts();

        const handleStorageChange = event => {
            if (event.key === 'products') {
                loadProducts();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const updateProduct = (id, newName, newDescription, newStock) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                return { ...product, name: newName, description: newDescription, stock: parseInt(newStock) };
            }
            return product;
        });
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const toggleEditForm = id => {
        setEditingId(id);
        const product = products.find(product => product.id === id);
        setNewName(product.name);
        setNewDescription(product.description);
        setNewStock(product.stock);
    };

    const handleUpdate = (e, id) => {
        e.preventDefault();
        updateProduct(id, newName, newDescription, newStock);
        setEditingId(null); // Cerrar el formulario de edición después de actualizar
    };

    if (!products || products.length === 0) {
        return <div>No hay productos disponibles.</div>;
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
                            <p>{product.description}</p>
                            <p>Precio: ${product.price}</p>
                            <p>Stock: {product.stock}</p>
                            <button onClick={() => toggleEditForm(product.id)}>Modificar Producto</button>
                            {editingId === product.id && (
                                <form onSubmit={(e) => handleUpdate(e, product.id)}>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder="Nuevo nombre"
                                    />
                                    <input
                                        type="text"
                                        value={newDescription}
                                        onChange={(e) => setNewDescription(e.target.value)}
                                        placeholder="Nueva descripción"
                                    />
                                    <input
                                        type="number"
                                        value={newStock}
                                        onChange={(e) => setNewStock(e.target.value)}
                                        placeholder="Nuevo stock"
                                    />
                                    <button type="submit">Actualizar</button>
                                </form>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
