import React, { Suspense, useContext } from 'react';
import './TweetDialog.css';
import Tweet from './Tweet';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Dialog from '../Dialog/Dialog';
import DialogHeader from '../Dialog/DialogHeader';

const TweetDialog = () => {
  const { newTweetDialogOpen, closeNewTweetDialog } = useContext(TweetsContext);

  return (
    <Suspense fallback={null}>
      <Dialog open={newTweetDialogOpen} onClose={closeNewTweetDialog}>
        <div className='tweetDialog__container'>
          <DialogHeader onClose={closeNewTweetDialog} />
          <div className='tweetDialog__body'>
            <Tweet autoFocus rows={6} />
          </div>
        </div>
      </Dialog>
    </Suspense>
  )
}

export default TweetDialog
