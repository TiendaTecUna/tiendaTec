import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles }) => {
  const role = localStorage.getItem('role'); // Obtén el rol del localStorage
  return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
