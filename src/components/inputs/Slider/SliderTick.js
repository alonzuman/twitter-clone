import React from 'react';
import './SliderTick.css';

const SliderTick = ({ isSelected = false }) => {
  return (
    <div className={`sliderTick ${isSelected ? 'sliderTIck--selected' : ''}`} />
  )
}

export default SliderTick
