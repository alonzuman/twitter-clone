import React, { Suspense, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../assets/icons/AddIcon';
import HomeIcon from '../../../assets/icons/HomeIcon';
import MessageIcon from '../../../assets/icons/MessageIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';
import NotificationsIcon from '../../../assets/icons/NotificationsIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import TwitterIcon from '../../../assets/icons/TwitterIcon';
import { ProfileContext } from '../../../contexts/ProfileContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { TweetsContext } from '../../../contexts/TweetsContext';
import useWindowSize from '../../../hooks/useWindowSize';
import IconButton from '../../buttons/IconButton/IconButton';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import './Navbar.css';
import NavbarItem from './NavbarItem';
import NavbarPopper from './NavbarPopper';

const Navbar = () => {
  const { isAuth, user: { username } } = useContext(ProfileContext);
  const { openNewTweetDialog } = useContext(TweetsContext);
  const { openDialog: openMoreDialog } = useContext(ThemeContext);
  const { width } = useWindowSize();

  const menu = [
    { label: 'Home', selectedIcon: <HomeIcon size={28} color='nav__icon' />, icon: <HomeIcon size={28} className='nav__icon' />, path: '/home' },
    // { label: 'Explore', selectedIcon: <NotificationsIcon size={28} color='nav__icon' />, icon: <NotificationsIcon size={28} clasName='nav__icon' />, path: '/explore' },
    { label: 'Profile', selectedIcon: <ProfileIcon size={28} color='nav__icon' />, icon: <ProfileIcon size={28} className='nav__icon' />, path: `/${username}` },
    { label: 'Messages', selectedIcon: <MessageIcon size={28} color='nav__icon' />, icon: <MessageIcon size={28} className='nav__icon' />, path: `/messages` },
    { label: 'More', selectedIcon: <MoreIcon size={28} color='nav__icon' />, icon: <MoreIcon size={28} className='nav__icon' />, onClick: openMoreDialog },
  ]

  if (width > 500 && isAuth) {
    return (
      <Suspense fallback={null}>
        <nav role="nav" className="nav__wrapper">
          <div className="nav__container">
            <ul className="nav__menu">
              <Link className="nav__twitterIconWrapper" to='/'>
                <IconButton size='md' className="nav__twitterIcon">
                  <TwitterIcon size={32} />
                </IconButton>
              </Link>
              {menu.map(({ label, path, icon, onClick }) => <NavbarItem label={label} icon={icon} onClick={onClick ? onClick : null} link={path} key={label} />)}
              <PrimaryButton className="nav__tweetButton" size="lg" onClick={openNewTweetDialog}>
                {width < 1024 ? <AddIcon /> : 'Tweet'}
              </PrimaryButton>
            </ul>
            <NavbarPopper />
          </div>
        </nav>
      </Suspense>
    )
  } else {
    return null;
  }
}

export default Navbar
