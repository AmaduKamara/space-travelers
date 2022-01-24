import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const Navbar = () => (
  <nav>

    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <ul>
      <li>
        {' '}
        <Link to="/rockets"> Rockets </Link>
      </li>
      <li>
        {' '}
        <Link to="/missions"> Missions </Link>
      </li>
      <li>
        {' '}
        <Link to="/profile"> My Profile </Link>
      </li>
    </ul>

  </nav>
);

export default Navbar;
