import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">hello tecnical</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/about">About</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>{' '}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
