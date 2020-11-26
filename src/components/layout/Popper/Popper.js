import React, { Suspense, useCallback, useEffect, useRef } from 'react';
import useClickAway from '../../../hooks/useClickAway';
import './Popper.css';

const Popper = ({ open, onClose, children }) => {
  const popperRef = useRef(null);
  const { clickedAway } = useClickAway(popperRef);

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      return onClose();
    }
  })

  useEffect(() => {
    if (clickedAway) {
      return onClose();
    }
  }, [clickedAway])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => document.removeEventListener('keydown', escFunction, false);
  }, [])

  if (open) {
    return (
      <Suspense fallback={null}>
        <div ref={popperRef} className='popper__container'>
          {children}
        </div>
      </Suspense>
    )
  } else {
    return null;
  }
}

export default Popper
