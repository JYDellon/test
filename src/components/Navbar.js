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
                            to="/test/a-propos"
                            className={isActiveLink('/test/a-propos') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            A propos de
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/test/nos-services"
                            className={isActiveLink('/test/nos-services') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Nos solutions web
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/test/portfolio"
                            className={isActiveLink('/test/portfolio') ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            Etudes de cas
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/test/contact"
                            className={isActiveLink('/test/contact') ? 'active' : ''}
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
                            to="/test/rgpd"
                            className={isActiveLink('/test/rgpd') ? 'active' : ''}
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
