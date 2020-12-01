import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import './Sidebar.css'

const Sidebar = () => {
  const { width } = useWindowSize();

  if (width > 768) {
    return (
      <div role="side-bar" className='sidebar'>
        <div />
      </div>
    )
  } else {
    return null;
  }
}

export default Sidebar
