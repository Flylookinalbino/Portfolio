import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='absolute top-0 left-0 w-2/5 h-full shadow-lg bg-gray-100 sm:w-2/5 md:w-2/5 lg:w-1/5 xl:w-1/5 z-20'>
      <section className='m-2 p-2 divide-y divide-red-800'>
        <h1 className='text-center font-thin tracking-widest text-3xl text-teal-700'>
          NavBar
        </h1>
        <ul className='text-center p-2 text-xl font-light tracking-wide text-teal-800 grid grid-flow-row gap-3'>
          <Link to='/'>
            <li onClick={props.closeNav} className='btn'>
              JumboTron
            </li>
          </Link>
          <Link to='/skills'>
            <li onClick={props.closeNav} className='btn'>
              Skills
            </li>
          </Link>
          <Link to='/clone-projects'>
            <li onClick={props.closeNav} className='btn'>
              Clone Projects
            </li>
          </Link>
          <Link to='/vanillajs-projects'>
            <li onClick={props.closeNav} className='btn'>
              Vanilla JS Projects
            </li>
          </Link>
          <Link to='/animation'>
            <li onClick={props.closeNav} className='btn'>
              Animation
            </li>
          </Link>
          <Link to='/reactjs-projects'>
            <li onClick={props.closeNav} className='btn'>
              React JS Projects
            </li>
          </Link>
          <Link to='/production-projects'>
            <li onClick={props.closeNav} className='btn'>
              Production Projects
            </li>
          </Link>
          <Link to='/contact-me'>
            <li onClick={props.closeNav} className='btn'>
              Contact ME
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default NavBar;
