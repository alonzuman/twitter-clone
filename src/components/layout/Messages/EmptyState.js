import React from 'react';
import './EmptyState.css';

const EmptyState = ({ title = 'No data to show', body = `Couldn't find data sorry` }) => {
  return (
    <div className='emptyState'>
      <h1 className='emptyState__title'>{title}</h1>
      <p className='emptyState__body'>{body}</p>
    </div>
  )
}

export default EmptyState
