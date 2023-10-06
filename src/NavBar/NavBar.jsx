import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Canyon</h1>

        <nav>
            <ul>
                <li>Montaña</li>
                <li>Gravel</li>
                <li>Ruta</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
