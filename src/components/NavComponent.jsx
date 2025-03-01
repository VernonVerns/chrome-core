import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div id='navigation_bar'>
            <div className='nav-brand'>
                <Link to="/" className='word-logo' onClick={closeMenu}>ChromeCore</Link>
            </div>
            <button className='menu-toggle-btn' onClick={toggleMenu}>
                <i className='bi bi-list'></i>
            </button>
            <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
                <ul className='nav-menu'>
                    <li className="menu-item">
                        <NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/our-business" onClick={closeMenu}>Our Business</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/governance" onClick={closeMenu}>Governance</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/social-responsibility" onClick={closeMenu}>Social Responsibility</NavLink>
                    </li>
                </ul>
                <ul className='sub-menu'>
                    <li className="menu-item">
                        <NavLink to="/contact-us" className="contact-us-btn" onClick={closeMenu}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavComponent;
