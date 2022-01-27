import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';

const Navbar = () => (
  <nav className="container mx-auto  border-b-2 bg-white py-6 flex justify-between">
    <NavLink to="/" className="flex items-center">
      <img width="70" src={logo} alt="logo" className="mr-3" />
      {' '}
      <span className="text-2xl">Space Travelers&apos; Hub</span>
    </NavLink>
    <ul className="flex items-center" activeClassName="active">
      <li className="mx-6 text-lg">
        {' '}
        <NavLink to="/" className="text-blue-600"> Rockets </NavLink>
      </li>
      <li className="mx-6 text-lg" activeClassName="active">
        {' '}
        <NavLink to="/missions" className="text-blue-600"> Missions </NavLink>
      </li>
      <li
        className="ml-3 text-lg border-l-2 border-l-gray-700 pl-6"
        activeClassName="active"
      >
        {' '}
        <NavLink to="/profile" className="text-blue-600"> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
