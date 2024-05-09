import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Asegúrate de que la ruta es correcta
import Navigation from './components/Navigation'; // Asegúrate de que la ruta es correcta
import Login from './components/login';
import AdminProductInput from './components/AdminInterface/AdminProductInput';
import AdminProductList from './components/AdminInterface/AdminProductList';
import ProductList from './components/ProductList/productList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Ventas from './components/AdminInterface/AdminVentas';
import WelcomeScreen from './components/welcomeScreen';
import ReactDOM from 'react-dom';
import { CartProvider } from './components/ShoppingCart/cartContex'; // Asegúrate de que la ruta es correcta

ReactDOM.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation /> {/* Componente de navegación */}
          <Routes>
            <Route path="/" element={<WelcomeScreen /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/add-product" element={<AdminProductInput />} />
            <Route path="/admin/products" element={<AdminProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/admin/ventas" element={<Ventas />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
