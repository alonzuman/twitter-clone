import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarItem.css';

const NavbarItem = ({ label, icon, link, onClick }) => {
  return (
    <Link onClick={onClick} to={link} className="baseFocus navbarItem__container">
      <span className="navbarItem__icon">{icon}</span>
      <span className="navbarItem__label">{label}</span>
    </Link>
  )
}

export default NavbarItem
