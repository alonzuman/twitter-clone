import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarItem.css';

const NavbarItem = ({ label, icon, link, onClick }) => {
  if (link) {
    return (
      <Link onClick={onClick} to={link} className="baseFocus navbarItem__container">
        <span className="navbarItem__icon">{icon}</span>
        <span className="navbarItem__label">{label}</span>
      </Link>
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
