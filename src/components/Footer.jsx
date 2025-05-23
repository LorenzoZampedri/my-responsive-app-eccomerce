import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="shadow-inner bg-gray-300 text-gray-800 border-t border-gray-400 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
            <p className="text-sm">Telefono: +54 11-3632-4533</p>
            <p className="text-sm">Email: lorenzozampedri01@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/?locale=es_LA" aria-label="Facebook" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:text-pink-500 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://x.com/?lang=es" aria-label="Twitter" className="hover:text-sky-400 transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/lorenzo-zampedri-1957a8216/" aria-label="LinkedIn" className="hover:text-blue-300 transition">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
           <a href="https://www.youtube.com/?app=desktop&hl=es" aria-label="YouTube" className="hover:text-red-500 transition">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
