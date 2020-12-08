import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.css';

const NavbarItem = ({ label, icon, link, onClick }) => {
  if (link) {
    return (
      <NavLink exact activeClassName='navbarItem__container--active' onClick={onClick} to={link} className="baseFocus navbarItem__container">
        <span className="navbarItem__icon">{icon}</span>
        <span className="navbarItem__label">{label}</span>
      </NavLink>
    )
  } else {
    return (
      <li className="baseFocus navbarItem__container" onClick={onClick}>
        <span className="navbarItem__icon">{icon}</span>
        <span className="navbarItem__label">{label}</span>
      </li>
    )
  }
}

export default NavbarItem
