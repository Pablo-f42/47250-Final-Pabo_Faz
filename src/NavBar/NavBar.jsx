import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src={"./img/Canyon.svg"} alt="Logo Canyon" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="categoria/3">Montaña</NavLink>
          </li>

          <li>
            <NavLink to="categoria/2">Gravel</NavLink>
          </li>

          <li>
            <NavLink to="categoria/4">Ruta</NavLink>
          </li>
          
        </ul>
      </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
