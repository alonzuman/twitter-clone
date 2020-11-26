import React from 'react';
import HomeIcon from '../../../assets/icons/HomeIcon';
import NotificationsIcon from '../../../assets/icons/NotificationsIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import useWindowSize from '../../../hooks/useWindowSize';
import './Footer.css';
import FooterItem from './FooterItem';
import FooterTweetButton from './FooterTweetButton';

const menu = [
  { label: 'Feed', icon: <HomeIcon size={24} />, path: '/' },
  { label: 'Notifications', icon: <NotificationsIcon size={24} />, path: '/notifications' },
  { label: 'Profile', icon: <ProfileIcon size={24} />, path: '/profile' },
]

const Footer = () => {
  const { width } = useWindowSize();

  if (width <= 500) {
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
