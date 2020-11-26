import React, { useContext } from 'react';
import './TweetDialog.css';
import TweetDialogHeader from './TweetDialogHeader';
import Tweet from './Tweet';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Dialog from '../Dialog/Dialog';

const TweetDialog = () => {
  const { isAdding, setIsAdding } = useContext(TweetsContext);

  return (
    <Dialog open={isAdding} onClose={() => setIsAdding(false)}>
      <div className='tweetDialog__container'>
        <TweetDialogHeader onClose={() => setIsAdding(false)} />
        <div className='tweetDialog__body'>
          <Tweet autoFocus rows={6} />
        </div>
      </div>
    </Dialog>
  )
}

export default TweetDialog
