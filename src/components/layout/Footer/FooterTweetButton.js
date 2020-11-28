import React, { useContext } from 'react'
import './FooterTweetButton.css';
import AddIcon from '../../../assets/icons/AddIcon'
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton'
import { TweetsContext } from '../../../contexts/TweetsContext';

const FooterTweetButton = () => {
  const { openNewTweetDialog } = useContext(TweetsContext);

  return (
    <PrimaryButton onClick={openNewTweetDialog} size='lg' className='footerTweetButton'>
      <AddIcon className='footerTweetButton__icon' size={24} />
    </PrimaryButton>
  )
}

export default FooterTweetButton
