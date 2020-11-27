import React from 'react';
import './Avatar.css';

const Avatar = ({ size = 'md', src, alt, className = '', ...rest }) => {
  return <img src={src} alt={alt} className={`avatar__base avatar--${size} ${className}`} {...rest} />
}

export default Avatar
