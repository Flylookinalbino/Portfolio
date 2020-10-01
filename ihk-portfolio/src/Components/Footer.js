import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='grid grid-cols-12 gap-1 justify-items-stretch border shadow-inner bg-white rounded-tl-lg rounded-tr-lg absolute bottom-0 w-full z-0'>
      <section className='w-16 h-12 justify-self-center col-span-3'>
        <Logo />
      </section>
      <section className='justify-self-center self-center col-span-5'>
        <h1 className='text-md text-red-800 font-light tracking-widest'>
          &copy; Copyright
        </h1>
      </section>
      <section className='justify-self-start self-center text-md tracking-widest col-span-4 text-red-800'>
        <h1>September 2020</h1>
      </section>
    </div>
  );
};

export default Footer;
