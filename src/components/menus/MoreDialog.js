import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import Dialog from '../layout/Dialog/Dialog'
import DialogHeader from '../layout/Dialog/DialogHeader'
import More from './More'

const MoreDialog = () => {
  const { isMoreOpen, closeDialog } = useContext(ThemeContext);

  return (
    <Dialog open={isMoreOpen} onClose={closeDialog}>
      <DialogHeader title='Settings' onClose={closeDialog} />
      <More />
    </Dialog>
  )
}

export default MoreDialog
