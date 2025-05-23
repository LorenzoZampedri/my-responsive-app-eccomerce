import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function CartHover() {
  const { cartItems, removeFromCart, decreaseQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Botón del carrito con contador */}
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded relative"
        onClick={() => navigate('/cart')} // Navega a /cart al hacer click
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
      {/* Dropdown del carrito */}
      {isOpen && cartItems.length > 0 && (
        <div className="absolute right-0 w-72 bg-white border rounded shadow-lg p-4 z-50">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-3">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-contain mr-3" />
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-sm text-gray-700">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-700 hover:underline"
                >
                  x
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-2 font-bold flex justify-between text-sm">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            to="/cart"
            className="block mt-3 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
          >
            Finalizar compra
          </Link>
        </div>
      )}

      {isOpen && cartItems.length === 0 && (
        <div className="absolute right-0 w-48 bg-white border rounded shadow-lg p-4 z-50">
          <p>Tu carrito está vacío.</p>
        </div>
      )}
    </div>
  );
}
