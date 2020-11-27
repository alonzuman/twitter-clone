import React from 'react';
import './Skeleton.css';

const Skeleton = ({ variant = 'rect', height = 24, width = '100%', style = {}, className = '' }) => {
  return <div style={{ height, width, ...style }} className={`skeleton__base ${variant === 'circle' ? 'skeleton--circle' : ''} ${className}`} />
}

export default Skeleton
