import React, { Suspense, useContext } from 'react';
import HomeIcon from '../../../assets/icons/HomeIcon';
import NotificationsIcon from '../../../assets/icons/NotificationsIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import { ProfileContext } from '../../../contexts/ProfileContext';
import useWindowSize from '../../../hooks/useWindowSize';
import './Footer.css';
import FooterItem from './FooterItem';
import FooterTweetButton from './FooterTweetButton';

const Footer = () => {
  const { isAuth, user: { username } } = useContext(ProfileContext);
  const { width } = useWindowSize();

  const menu = [
    { label: 'Feed', icon: <HomeIcon size={24} />, path: '/home' },
    // { label: 'Notifications', icon: <NotificationsIcon size={24} />, path: '/notifications' },
    { label: 'Profile', icon: <ProfileIcon size={24} />, path: `/${username}` },
  ]

  if (width <= 500 && isAuth) {
    return (
      <footer className='footer'>
        <FooterTweetButton />
        <ul className='footer__menu'>
          {menu.map(({ label, icon, path }) => <FooterItem key={label} label={label} icon={icon} path={path} />)}
        </ul>
      </footer>
    )
  } else {
    return null;
  }
}

export default Footer
