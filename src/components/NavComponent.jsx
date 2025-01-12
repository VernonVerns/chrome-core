import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComponent = () => {
    return (
        <div id='navigation_bar'>
            <div className='nav-brand'>
                <h4>ChromeCore</h4>
            </div>
            <div className='menu-container'>
                <ul className='nav-menu'>
                    <li className="menu-item">
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/">Our Business</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/">Governance</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/">Our People</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/">Social Responsibility</NavLink>
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