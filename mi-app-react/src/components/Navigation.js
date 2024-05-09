import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './../AuthContext'; // Verifica la ruta
import './Navigation.css';  // Importa los estilos CSS

function Navigation() {
    const { user, logout } = useAuth();

    if (!user) {
        return null;
    }
    return (
        <nav>
            <ul>
                {user ? (
                    <>
                        <li><Link to="/products">Ver Productos</Link></li>
                        <li><Link to="/cart">Carrito de Compras</Link></li>
                        {user.role === 'admin' && (
                            <>
                                <li><Link to="/admin/add-product">Añadir Producto</Link></li>
                                <li><Link to="/admin/products">Lista de Productos</Link></li>
                                <li><Link to="/admin/ventas">Ver Ventas</Link></li>
                            </>
                        )}
                        <li><button onClick={logout}>Cerrar Sesión</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;
