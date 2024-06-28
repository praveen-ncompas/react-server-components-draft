import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/client">Client Component</Link></li>
                    <li><Link to="/server">Server Component</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
