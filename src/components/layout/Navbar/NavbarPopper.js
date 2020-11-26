import React, { useContext, useState } from 'react';
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon';
import { AuthContext } from '../../../contexts/AuthContext';
import Avatar from '../../avatars/Avatar/Avatar';
import SecondaryButton from '../../buttons/SecondaryButton/SecondaryButton';
import Popper from '../Popper/Popper';
import './NavbarPopper.css';

const NavbarPopper = () => {
  const { signOut, user: { avatar, displayName } } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbarPopper__container'>
      <SecondaryButton className='navbarPopper__button' size='lg' onClick={() => setIsOpen(true)}>
        <Avatar size='sm' alt={displayName} src={avatar} />
        <div className='navbarPopper__buttonText'>
          <h3 className='navbarPopper__buttonTitle'>Alon Zuman</h3>
          <p className='navbarPopper__buttonSubtitle'>@alonzuman</p>
        </div>
        <ChevronDownIcon className='navbarPopper__buttonIcon' />
      </SecondaryButton>
      <Popper open={isOpen} onClose={() => setIsOpen(false)}>
        <SecondaryButton onClick={signOut}>Sign Out</SecondaryButton>
      </Popper>
    </div>
  )
}

export default NavbarPopper
