import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Slider from '../inputs/Slider/Slider';
import BackgroundButton from './BackgroundButton';
import ColorButton from './ColorButton';
import './More.css';

const More = () => {
  const { handleBackgroundChange, handleFontChange, handleColorChange, background, fontSize, color: currentColor } = useContext(ThemeContext);

  const backgrounds = [
    { color: 'dim', label: 'Dim' },
    { color: 'lights-out', label: 'Lights Out' },
    { color: 'default', label: 'Default' }
  ]

  const colors = [
    { color: 'blue' },
    { color: 'yellow' },
    { color: 'red' },
    { color: 'purple' },
    { color: 'orange' },
    { color: 'green' },
  ];

  return (
    <div className='more'>
      <p className='more__paragraph'>Manage your font size, color and background. These settings affect all the <br /> Twitter accounts on this browser.</p>
      <section className='more__section'>
        <h5 className='more__sectionTitle'>Font size</h5>
        <div className='more__sectionContent'>
          <Slider renderBefore='Aa' renderAfter='Aa' step={1} min={1} max={5} onChange={handleFontChange} value={fontSize} />
        </div>
      </section>
      <section className='more__section'>
        <h5 className='more__sectionTitle'>Color</h5>
        <div className='more__sectionContent more__colorButtons'>
          {colors.map(({ color }) => <ColorButton isSelected={currentColor === color} color={color} onClick={() => handleColorChange(color)} />)}
        </div>
      </section>
      <section className='more__section'>
        <h5 className='more__sectionTitle'>Background</h5>
        <div className='more__sectionContent'>
          <div className='more__bottomButtons'>
            {backgrounds.map(({ color, label }) => (
              <BackgroundButton
                color={color}
                isSelected={background === color}
                onClick={() => handleBackgroundChange(color)}>
                {label}
              </BackgroundButton>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default More
