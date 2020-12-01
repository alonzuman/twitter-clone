import React, { useContext, useEffect, useState } from 'react'
import './FooterTweetButton.css';
import AddIcon from '../../../assets/icons/AddIcon'
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton'
import { TweetsContext } from '../../../contexts/TweetsContext';
import { useHistory } from 'react-router-dom';

const FooterTweetButton = () => {
  const [display, setDisplay] = useState(false);
  const { openNewTweetDialog } = useContext(TweetsContext);
  const history = useHistory();

  history.listen((location) => {
    if (location.pathname === '/messages') {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  })

  if (display) {
    return (
      <PrimaryButton onClick={openNewTweetDialog} size='lg' className='footerTweetButton'>
        <AddIcon className='footerTweetButton__icon' size={24} />
      </PrimaryButton>
    )
  } else {
    return null;
  }
}

export default FooterTweetButton
