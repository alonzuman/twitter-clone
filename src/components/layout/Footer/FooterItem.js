import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '../../buttons/IconButton/IconButton';
import './FooterItem.css';

const FooterItem = ({ label, icon, path }) => {
  return (
    <NavLink className='footerItem__wrapper' exact to={path} activeClassName='footerItem__wrapper--active'>
      <li className='footerItem__container'>
        <IconButton size='md'>
          <span className='footerItem__icon'>
            {icon}
          </span>
        </IconButton>
      </li>
    </NavLink>
  )
}

export default FooterItem
