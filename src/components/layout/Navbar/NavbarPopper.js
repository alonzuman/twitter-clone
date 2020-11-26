import React, { useState } from 'react';
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon';
import Avatar from '../../avatars/Avatar/Avatar';
import SecondaryButton from '../../buttons/SecondaryButton/SecondaryButton';
import Popper from '../Popper/Popper';
import './NavbarPopper.css';

const NavbarPopper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbarPopper__container'>
      <SecondaryButton className='navbarPopper__button' size='lg' onClick={() => setIsOpen(true)}>
        <Avatar size='sm' alt='Alon Zuman' src='https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/44685244_10217665055724131_9020183074020786176_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=kKel2MBX1CsAX9HNiAY&_nc_ht=scontent.fsdv1-2.fna&oh=b51536d035f712dbdcdc83a8890dbd13&oe=5FE605AE' />
        <div className='navbarPopper__buttonText'>
          <h3 className='navbarPopper__buttonTitle'>Alon Zuman</h3>
          <p className='navbarPopper__buttonSubtitle'>@alonzuman</p>
        </div>
        <ChevronDownIcon className='navbarPopper__buttonIcon' />
      </SecondaryButton>
      <Popper open={isOpen} onClose={() => setIsOpen(false)}>
        <h1>hi</h1>
      </Popper>
    </div>
  )
}

export default NavbarPopper
