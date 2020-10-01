import React from 'react';
import Logo from './Logo';
import NavButton from '../Control/NavButton';

const Header = () => {
  return (
    <div className='grid grid-cols-12 gap-1 justify-items-stretch border shadow-xl bg-white z-20'>
      <section className='w-24 h-16 justify-self-center col-span-3'>
        <Logo />
      </section>
      <section className='justify-self-center self-center col-span-6'>
        <h1 className='text-3xl text-teal-800 font-light tracking-widest'>
          FlyLookin
          <span className='text-red-900'>Albino</span>
        </h1>
      </section>
      <section className='justify-self-end self-center text-2xl pr-2 col-span-3 text-red-900 z-20'>
        <NavButton />
      </section>
    </div>
  );
};

export default Header;
