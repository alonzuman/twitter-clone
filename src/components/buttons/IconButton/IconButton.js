import React from 'react';
import './IconButton.css';

const IconButton = ({ children, onClick, className, size = 'sm', ...rest }) => {
  return (
    <button className={`baseFocus iconButton__container iconButton--${size} ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
