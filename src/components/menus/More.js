import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Slider from '../inputs/Slider/Slider';
import BackgroundButton from './BackgroundButton';
import './More.css';

const More = () => {
  const { handleBackgroundChange, handleFontChange, handleColorChange, background, fontSize, color } = useContext(ThemeContext);

  return (
    <div className='more'>
      <p className='more__paragraph'>Manage your font size, color and background. These settings affect all the <br /> Twitter accounts on this browser.</p>
      <section className='more__section'>
        <h5 className='more__sectionTitle'>Font size</h5>
        <div className='more__sectionContent'>
          <Slider renderBefore='Aa' renderAfter='Aa' step={1} min={1} max={5} onChange={handleFontChange} value={fontSize} />
        </div>
      </section>
      {/* <section className='more__section'>
        <h5 className='more__sectionTitle'>Color</h5>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
      </section> */}
      <section className='more__section'>
        <h5 className='more__sectionTitle'>Background</h5>
        <div className='more__sectionContent'>
          <div className='more__bottomButtons'>
            <BackgroundButton color='default' isSelected={background === 'default'} onClick={() => handleBackgroundChange('default')}>Default</BackgroundButton>
            <BackgroundButton color='dim' isSelected={background === 'dim'} onClick={() => handleBackgroundChange('dim')}>Dim</BackgroundButton>
            <BackgroundButton color='lights-out' isSelected={background === 'lights-out'} onClick={() => handleBackgroundChange('lights-out')}>Lights out</BackgroundButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default More
