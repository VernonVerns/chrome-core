import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavComponent = () => {
    return (
        <div id='navigation_bar'>
            <div className='nav-brand'>
                <Link to="/" className='word-logo'>ChromeCore</Link>
            </div>
            <div className='menu-container'>
                <ul className='nav-menu'>
                    <li className="menu-item">
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/our-business">Our Business</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/governance">Governance</NavLink>
                    </li>
                    {/* <li className="menu-item">
                        <NavLink to="/our-people">Our People</NavLink>
                    </li> */}
                    <li className="menu-item">
                        <NavLink to="/social-responsibility">Social Responsibility</NavLink>
                    </li>
                </ul>
                <ul className='sub-menu'>
                    <li className="menu-item">
                        <NavLink to="/contact-us" className="contact-us-btn">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavComponent