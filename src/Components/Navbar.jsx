import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white nav-component">
            <div className="mx-auto d-flex justify-content-center">
                <NavLink className="navbar-brand" to="/">Posts</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/search">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/create">Create</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/edit">Edit</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;