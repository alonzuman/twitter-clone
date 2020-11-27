import React from 'react';
import CloseIcon from '../../../assets/icons/CloseIcon';
import IconButton from '../../buttons/IconButton/IconButton';
import './DialogHeader.css';

const DialogHeader = ({ onClose }) => {
  return (
    <header className='tweetDialog__header'>
      <IconButton onClick={onClose}>
        <CloseIcon color="var(--primary-main)" />
      </IconButton>
    </header>
  )
}

export default DialogHeader
