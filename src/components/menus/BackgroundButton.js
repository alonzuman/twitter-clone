import React from 'react';
import './BackgroundButton.css';

const BackgroundButton = ({ children, isSelected, color, ...rest }) => {
  return (
    <button className={`backgroundButton backgroundButton--${color} ${isSelected ? 'backgroundButton--selected' : ''}`} {...rest}>
      {children}
    </button>
  )
}

export default BackgroundButton
