import React, { Suspense, useContext } from 'react';
import HomeIcon from '../../../assets/icons/HomeIcon';
import MessageIcon from '../../../assets/icons/MessageIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';
import NotificationsIcon from '../../../assets/icons/NotificationsIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import { ProfileContext } from '../../../contexts/ProfileContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import useWindowSize from '../../../hooks/useWindowSize';
import './Footer.css';
import FooterItem from './FooterItem';
import FooterTweetButton from './FooterTweetButton';

const Footer = () => {
  const { isAuth, user: { username } } = useContext(ProfileContext);
  const { width } = useWindowSize();
  const { openDialog: openMoreDialog } = useContext(ThemeContext);

  const menu = [
    { label: 'Feed', icon: <HomeIcon size={24} />, path: '/home' },
    { label: 'Messages', icon: <MessageIcon size={24} />, path: '/messages' },
    { label: 'Profile', icon: <ProfileIcon size={24} />, path: `/${username}` },
    { label: 'More', icon: <MoreIcon size={24} />, onClick: openMoreDialog },
  ]

  if (width <= 500 && isAuth) {
    return (
      <footer className='footer'>
        <FooterTweetButton />
        <ul className='footer__menu'>
          {menu.map(({ label, icon, path, onClick }) => <FooterItem onClick={onClick} key={label} label={label} icon={icon} path={path} />)}
        </ul>
      </footer>
    )
  } else {
    return null;
  }
}

export default Footer
