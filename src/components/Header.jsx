import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
    import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
    import CartHover from './CartHover';

    const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow text-gray-800">
        <nav className="bg-gray-50 shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
                <Link to="/" className="block h-16 w-auto">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/logocaja.png`}
                        alt="Logo"
                        className='h-full w-auto object-contain'
                    />
                </Link>
                <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
                    <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
                </button>
            <div className={`flex-col md:flex md:flex-row ${navOpen ? 'flex' : 'hidden'} md:flex`}>
                <Link to="/home" className="p-2 hover:text-blue-600 hover:bg-gray-100 rounded transition duration-300">Inicio</Link>
                <Link to="/products" className="p-2 hover:text-blue-600 hover:bg-gray-100 rounded transition duration-300">Productos</Link>
                <Link to="/contact" className="p-2 hover:text-blue-600 hover:bg-gray-100 rounded transition duration-300">Quiénes somos</Link>
                <Link to="/sign-in" className="p-2 hover:text-blue-600 hover:bg-gray-100 rounded transition duration-300">Iniciar sesión</Link>
                <CartHover />
            </div>
        </div>
        </nav>
    </header>
    );
};

export default Header;