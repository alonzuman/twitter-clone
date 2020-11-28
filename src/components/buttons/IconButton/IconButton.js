import React from 'react';
import './IconButton.css';

const IconButton = ({ children, variant = 'default', onClick = null, className, size = 'sm', ...rest }) => {
  const handleClick = e => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }

  return (
    <button className={`baseFocus iconButton__container iconButton--${size} ${className} iconButton--${variant}`} onClick={handleClick} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
