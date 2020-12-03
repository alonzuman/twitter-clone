import React from 'react';
import './Slider.css';
import SliderTick from './SliderTick';

const Slider = ({ renderBefore, renderAfter, className, fillValue, value, ...rest }) => {
  return (
    <div className='rangeSlider__container'>
      <span className='rangeSlider__renderBefore'>{renderBefore}</span>
      <div className='rangeSlider__wrapper'>
        <input className={`rangeSlider ${className || ''}`} type='range' {...rest} />
        <div className='rangeSlider__customTrack' />
        <div className='rangeSlider__customTrackFill' style={{ width: fillValue }} />
        <div className='rangeSlider__ticks'>
          {[1, 2, 3, 4, 5].map((tick, index) => <SliderTick key={tick} isSelected={value >= (index + 1)} />)}
        </div>
      </div>
      <span className='rangeSlider__renderAfter'>{renderAfter}</span>
    </div>
  )
}

export default Slider
