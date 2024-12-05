import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onLinkClick }) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActiveLink = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <div className="navbar-container">
            <div className='miseEnPage'>
                <div className="navbar-header">
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </div>
               
            <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={isActiveLink('/') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/a-propos"
                            className={isActiveLink('/a-propos') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            A propos de
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/nos-services"
                            className={isActiveLink('/nos-services') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Nos solutions web
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            className={isActiveLink('/portfolio') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Etudes de cas
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={isActiveLink('/contact') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        {/* <Link
                            to="/devis"
                            className={isActiveLink('/devis') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Devis
                        </Link> */}
                    </li>
                    <li>
                        <Link
                            to="/rgpd"
                            className={isActiveLink('/rgpd') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            RGPD
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
