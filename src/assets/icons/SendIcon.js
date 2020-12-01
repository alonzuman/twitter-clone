import React from 'react'

const SendIcon = ({ size = 24, className }) => {
  return (
    <svg viewBox="0 0 24 24" className={className} height={`${size}px`}>
      <g>
        <path fill='inherit' d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z" />
      </g>
    </svg>
  )
}

export default SendIcon
