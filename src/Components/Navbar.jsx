import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white nav-component">
            <ul className="mx-auto d-flex justify-content-center gap-3">
                <li className="nav-item">
                    <NavLink className="nav-page" to="/">Posts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-page" to="/search">Search</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;