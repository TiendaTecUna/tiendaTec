
import React from 'react';
import './welcomeScreen.css'; // Asegura que el path es correcto
import { Link } from 'react-router-dom';

function WelcomeScreen() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Bienvenido a tiendaTec</h1>
            <button className="login-button"><Link to="/login">Iniciar Sesión</Link></button>
        </div>
    );
}

export default WelcomeScreen;
