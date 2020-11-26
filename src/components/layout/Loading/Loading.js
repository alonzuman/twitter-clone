import React from 'react';
import Spinner from '../../loaders/Spinner/Spinner';
import './Loading.css';

const Loading = ({ size }) => {
  return (
    <div className='loading'>
      <Spinner size={size} />
    </div>
  )
}

export default Loading
