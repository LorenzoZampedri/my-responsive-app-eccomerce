import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Products from "./pages/Products";
import Cart from './pages/Cart'
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import MyOrders from './pages/MyOrders';
import ProtectedRoute from './components/ProtectedRoute';



export default function App() {
  return (
    <BrowserRouter basename="/my-responsive-app-eccomerce/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} /> {/* Redirige '/' a '/home' */}
          <Route path="home" element={<Home />} /> 
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<div>Contact Content</div>} />
          <Route path="my-orders" 
                  element={
                    <ProtectedRoute>
                      <MyOrders />
                    </ProtectedRoute>
                    }
          />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="cart" element={<Cart />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
