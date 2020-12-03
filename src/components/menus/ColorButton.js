import React from 'react'
import CheckIcon from '../../assets/icons/CheckIcon'
import './ColorButton.css'

const ColorButton = ({ color, isSelected = false, ...rest }) => {
  return (
    <button style={{ backgroundColor: `var(--${color})` }} className='colorButton' {...rest}>
      {isSelected && <CheckIcon className='colorButton__icon' />}
    </button>
  )
}

export default ColorButton
