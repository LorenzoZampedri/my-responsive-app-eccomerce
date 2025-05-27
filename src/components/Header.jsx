import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartHover from './CartHover';
import { useAuth } from '../context/AuthContext'; // Asegurate de tener esto bien
// 👆 Ajustá el path si tu contexto está en otra carpeta

const Header = () => {
const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const getLinkClass = (path) =>
    `p-2 rounded transition duration-300 hover:text-blue-600 hover:bg-gray-100 ${
      location.pathname === path ? 'text-blue-600 font-semibold underline underline-offset-4' : ''
    }`;

return (
    <header className="sticky top-0 z-50 bg-white shadow text-gray-800">
        <nav className="bg-gray-50 shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
            <Link to="/" className="block h-16 w-auto">
                <img
                src={`${import.meta.env.BASE_URL}images/logocaja.png`}
                alt="Logo"
                className="h-full w-auto object-contain"
                />
            </Link>

            <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
                <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
            </button>

            <div className={`flex-col md:flex md:flex-row ${navOpen ? 'flex' : 'hidden'} md:flex`}>
                <Link to="/home" className={getLinkClass('/home')}>Inicio</Link>
                <Link to="/products" className={getLinkClass('/products')}>Productos</Link>
                <Link to="/contact" className={getLinkClass('/contact')}>Quiénes somos</Link>
                {isAuthenticated ? (
                <Link to="/my-orders" className={getLinkClass('/my-orders')}>Órdenes</Link>
                ) : (
                <Link to="/sign-in" className={getLinkClass('/sign-in')}>Iniciar sesión</Link>
                )}
                <CartHover />
            </div>
            </div>
        </nav>
    </header>
);
};

export default Header;
