import React from 'react';
import NavBar from '../Components/NavBar';
import Mask from '../Components/Mask';
import { FadeIn, FadeOut, checkAnimation } from '../Control/Interactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavButton = () => {
  return (
    <div>
      <div className=' cursor-pointer z-0' onClick={() => FadeIn()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div id='show' className='hidden'>
        <div
          className='main cursor-pointer z-20'
          onClick={() => FadeOut()}
          onAnimationEnd={() => checkAnimation()}>
          <Mask />
        </div>
        <div className='main z-20'>
          <NavBar closeNav={() => FadeOut()} />
        </div>
      </div>
    </div>
  );
};

export default NavButton;
