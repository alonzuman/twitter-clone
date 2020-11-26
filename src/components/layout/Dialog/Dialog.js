import React, { Suspense, useCallback, useEffect, useRef } from 'react';
import useClickAway from '../../../hooks/useClickAway';
import './Dialog.css';

const Dialog = ({ open, onClose, children }) => {
  const dialogRef = useRef(null)
  const { clickedAway } = useClickAway(dialogRef);

  useEffect(() => {
    if (clickedAway) {
      return onClose()
    }
  }, [clickedAway])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => document.body.style.overflow = 'auto';
  }, [open])

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      return onClose();
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => document.removeEventListener('keydown', escFunction, false);
  }, [])

  if (open) {
    return (
      <Suspense fallback={null}>
        <div className='dialog__wrapper'>
          <div ref={dialogRef} className='dialog__container'>
            {children}
          </div>
        </div>
      </Suspense>
    )
  } else {
    return null;
  }
}

export default Dialog
