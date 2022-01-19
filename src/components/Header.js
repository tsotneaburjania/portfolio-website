import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header id='header'>
        <div id='headerLogo'>
            <h1>M</h1>
        </div>
        <div id='navLinks'>
            <NavLink to="/">ბანერი</NavLink>
            <NavLink to="/about_me">შესახებ</NavLink>
            <NavLink to="/experience">გამოცდლება</NavLink>
            <NavLink to="/projects">პროექტები</NavLink>
            <NavLink to="/contact">კონტაქტი</NavLink>
        </div>
    </header>
  );
}

export default Header;
