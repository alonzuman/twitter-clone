import React from 'react'

const CheckIcon = ({ style, className, size }) => {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" height={`${size}px`}>
      <g>
        <path fill='inherit' d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z" />
      </g>
    </svg>
  )
}

export default CheckIcon
