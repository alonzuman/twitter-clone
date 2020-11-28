import React from 'react';
import TwitterIcon from '../../../assets/icons/TwitterIcon';
import './SplashScreen.css';

const SplashScreen = ({ size }) => {
  return (
    <div className='splashScreen'>
      <TwitterIcon className='splashScreen__icon' size={72} />
    </div>
  )
}

export default SplashScreen
