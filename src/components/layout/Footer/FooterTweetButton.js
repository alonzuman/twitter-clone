import React, { useContext } from 'react'
import './FooterTweetButton.css';
import AddIcon from '../../../assets/icons/AddIcon'
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton'
import { TweetsContext } from '../../../contexts/TweetsContext';

const FooterTweetButton = () => {
  const { openDialog } = useContext(TweetsContext);

  return (
    <PrimaryButton onClick={openDialog} size='lg' className='footerTweetButton'>
      <AddIcon className='footerTweetButton__icon' size={24} />
    </PrimaryButton>
  )
}

export default FooterTweetButton
