import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({ children, size = 'md', className = '', ...rest }) => {
  return (
    <button className={`baseFocus secondaryButton__base secondaryButton--${size} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default SecondaryButton
