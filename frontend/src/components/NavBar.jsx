import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">SurveYour</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/api/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/api/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;