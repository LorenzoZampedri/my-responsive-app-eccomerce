import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import Products from "./pages/Products";
import Cart from './pages/Cart'
import './App.css';
import Home from './pages/Home';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} /> {/* Redirige '/' a '/home' */}
          <Route path="home" element={<Home />} /> 
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<div>Contact Content</div>} />
          <Route path="sign-in" element={<div>Sign In Content</div>} />
          <Route path="cart" element={<Cart />} /> 
        </Route>
      </Routes>
    </Router>
  );
}
