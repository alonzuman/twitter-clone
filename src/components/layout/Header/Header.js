import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon';
import IconButton from '../../buttons/IconButton/IconButton';
import './Header.css'

const Header = ({ title, subtitle = '', backButton = false }) => {
  const { goBack } = useHistory();

  return (
    <header className='header'>
      {backButton &&
        <div className='header__backButtonContainer'>
          <IconButton className='header__backButton' onClick={goBack}><ArrowLeftIcon className='header__backButtonIcon' /></IconButton>
        </div>}
      <div className='header__text'>
        <h1 className='header__title'>{title}</h1>
        <h5 className='header__subtitle'>{subtitle}</h5>
      </div>
    </header>
  )
}

export default Header
