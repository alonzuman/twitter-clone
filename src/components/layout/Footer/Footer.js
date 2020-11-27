import React, { Suspense, useContext } from 'react';
import HomeIcon from '../../../assets/icons/HomeIcon';
import NotificationsIcon from '../../../assets/icons/NotificationsIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import { AuthContext } from '../../../contexts/AuthContext';
import useWindowSize from '../../../hooks/useWindowSize';
import './Footer.css';
import FooterItem from './FooterItem';
import FooterTweetButton from './FooterTweetButton';

const Footer = () => {
  const { isAuth, user: { username } } = useContext(AuthContext);
  const { width } = useWindowSize();

  const menu = [
    { label: 'Feed', icon: <HomeIcon size={24} />, path: '/' },
    { label: 'Notifications', icon: <NotificationsIcon size={24} />, path: '/notifications' },
    { label: 'Profile', icon: <ProfileIcon size={24} />, path: `/users/${username}` },
  ]

  if (width <= 500 && isAuth) {
    return (
      <Suspense fallback={null}>
        <footer className='footer'>
          <FooterTweetButton />
          <ul className='footer__menu'>
            {menu.map(({ label, icon, path }) => <FooterItem key={label} label={label} icon={icon} path={path} />)}
          </ul>
        </footer>
      </Suspense>
    )
  } else {
    return null;
  }
}

export default Footer
