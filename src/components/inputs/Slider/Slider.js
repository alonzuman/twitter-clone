import React from 'react';
import './Slider.css';

const Slider = ({ renderBefore, renderAfter, className, ...rest }) => {
  return (
    <div className='rangeSlider__container'>
      <span className='rangeSlider__renderBefore'>{renderBefore}</span>
      <input className={`rangeSlider ${className}`} type='range' {...rest} />
      <span className='rangeSlider__renderAfter'>{renderAfter}</span>
    </div>
  )
}

export default Slider
