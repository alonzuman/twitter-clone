import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ children, size = 'md', className = '', ...rest }) => {
  return (
    <button className={`baseFocus primaryButton__base primaryButton--${size} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default PrimaryButton
