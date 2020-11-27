import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';
import './More.css';

const More = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className='more__container'>
      <PrimaryButton variant={theme === 'dark' ? 'outlined' : ''} onClick={toggleTheme}>{theme}</PrimaryButton>
    </div>
  )
}

export default More
