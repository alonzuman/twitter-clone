import React from 'react';
import Spinner from '../../loaders/Spinner/Spinner';
import './PrimaryButton.css';

const PrimaryButton = ({ isLoading, children, size = 'md', className = '', ...rest }) => {
  return (
    <button className={`baseFocus primaryButton__base primaryButton--${size} ${className}`} {...rest}>
      {isLoading ? <Spinner size={size} className='primaryButton__spinner' /> : children}
    </button>
  )
}

export default PrimaryButton
