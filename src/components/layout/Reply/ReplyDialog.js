import React, { useContext } from 'react'
import './ReplyDialog.css';
import Reply from './Reply'
import Dialog from '../Dialog/Dialog';
import { TweetsContext } from '../../../contexts/TweetsContext';
import DialogHeader from '../Dialog/DialogHeader';

const ReplyDialog = () => {
  const { newReplyDialogOpen, closeNewReplyDialog } = useContext(TweetsContext);

  return (
    <Dialog open={newReplyDialogOpen} onClose={closeNewReplyDialog}>
      <DialogHeader onClose={closeNewReplyDialog} />
      <div className='replyDialog__container'>
        <Reply />
      </div>
    </Dialog>
  )
}

export default ReplyDialog
