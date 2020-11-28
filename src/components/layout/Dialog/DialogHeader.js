import React from 'react';
import CloseIcon from '../../../assets/icons/CloseIcon';
import IconButton from '../../buttons/IconButton/IconButton';
import './DialogHeader.css';

const DialogHeader = ({ onClose, title = '', secondaryAction }) => {
  return (
    <header className='dialogHeader'>
      <div className='dialogHeader__exitButtonContainer'>
        <IconButton onClick={onClose}>
          <CloseIcon className='dialogHeader__exitButton' />
        </IconButton>
      </div>
      <span className='dialogHeader__titleContainer'>
        <h3 className='dialogHeader__title'>{title}</h3>
      </span>
      <div className='dialogHeader__secondaryActionContainer'>
        {secondaryAction}
      </div>
    </header>
  )
}

export default DialogHeader
