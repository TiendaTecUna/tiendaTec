import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminProductInput from './components/AdminInterface/AdminProductInput';
import AdminProductList from './components/AdminInterface/AdminProductList';
import ProductList from './components/ProductList/productList'; // Asegúrate de que el nombre del archivo y la carpeta estén correctos y respeten mayúsculas y minúsculas
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Ventas from './components/AdminInterface/AdminVentas'; //


function App() {
    return (
        <Router>
            <div >
                <nav>
                    <ul>
                        <li><Link to="/admin/add-product">Añadir Producto</Link></li>
                        <li><Link to="/admin/products">Lista de Productos</Link></li>
                        <li><Link to="/products">Ver Productos</Link></li>
                        <li><Link to="/cart">Carrito de Compras</Link></li>
                        <li><Link to="/admin/ventas">Ver Ventas</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<h1>Bienvenido a la Tienda</h1>} />
                    <Route path="/admin/add-product" element={<AdminProductInput />} />
                    <Route path="/admin/products" element={<AdminProductList />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/admin/ventas" element={<Ventas />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
