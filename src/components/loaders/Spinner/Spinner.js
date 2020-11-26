import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 'sm', className = '' }) => {
  return <div className={`spinner__base spinner--${size} ${className}`} />
}

export default Spinner
