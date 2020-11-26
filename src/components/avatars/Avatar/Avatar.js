import React from 'react';
import './Avatar.css';

const Avatar = ({ size = 'md', src, alt }) => {
  const sizes = {
    xs: 'avatar__xs',
    sm: 'avatar__sm',
    md: 'avatar__md',
    lg: 'avatar__lg'
  }

  return (
    <img src={src} alt={alt} className={sizes[size]} />
  )
}

export default Avatar
