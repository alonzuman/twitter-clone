import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '../../buttons/IconButton/IconButton';
import './FooterItem.css';

const FooterItem = ({ label, icon, path, onClick = null }) => {
  if (path) {
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
  } else {
    return (
      <li onClick={onClick} className='footerItem__container footerItem__wrapper'>
        <IconButton size='md'>
          <span className='footerItem__icon'>
            {icon}
          </span>
        </IconButton>
      </li>
    )
  }
}

export default FooterItem
