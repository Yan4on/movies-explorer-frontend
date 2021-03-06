import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="nav-tab">
            <Link to="/#about-project-id" className="nav-tab__link">Узнать больше</Link>
        </nav>
    );
}

export default NavTab;
