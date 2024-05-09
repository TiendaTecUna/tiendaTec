import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/users.json')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => {
                console.error('Error loading users:', error);
                setError('No se pudo cargar la información de usuario.');
            });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('role', user.role);
            navigate('/products');
            window.location.reload() // Cambia a la página principal o dashboard según el rol
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Iniciar Sesión</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}

export default Login;

