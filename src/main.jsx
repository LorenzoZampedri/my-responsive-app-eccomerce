import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // nuevo
import { Toaster } from 'react-hot-toast' // notificaciones

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/*auth */}
      <CartProvider>
        <App />
        <Toaster position="top-right" reverseOrder={false} /> {/*Esto muestra los toasts */}
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
