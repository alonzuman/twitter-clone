import React, { Suspense, useContext } from 'react';
import './TweetDialog.css';
import TweetDialogHeader from './TweetDialogHeader';
import Tweet from './Tweet';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Dialog from '../Dialog/Dialog';

const TweetDialog = () => {
  const { dialogOpen, closeDialog } = useContext(TweetsContext);

  return (
    <Suspense fallback={null}>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <div className='tweetDialog__container'>
          <TweetDialogHeader onClose={closeDialog} />
          <div className='tweetDialog__body'>
            <Tweet autoFocus rows={6} />
          </div>
        </div>
      </Dialog>
    </Suspense>
  )
}

export default TweetDialog
