import React from 'react';
import Mask from '../Components/Mask';
import NavBar from '../Components/NavBar';
import { FadeIn, FadeOut, checkAnimation } from '../Control/Interactive';

const Prototype = () => {
  return (
    <div>
      <div className=' cursor-pointer' onClick={() => FadeIn()}>
        Hello
      </div>
      <div id='show' className='hidden'>
        <div
          className='main cursor-pointer z-10'
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

export default Prototype;

// return menu === false ? (
//   <div>
//     <span
//       onClick={() => {
//         setMenu(!menu);
//       }}>
//       <FontAwesomeIcon icon={faBars} />
//     </span>
//   </div>
// ) : (
//   <div>
//     <div onClick={() => setMenu(!menu)}>
//       <Mask />
//     </div>

//     <NavBar closeNav={() => setMenu(!menu)} />
//   </div>
// );

// <div className='mt-4 mb-5 mx-2'>
//     <h1 className='text-center text-xl bg-white px-2 py-2 mb-2 shadow-lg'>
//       Skills
//     </h1>
//     <section className='grid grid-cols-12 grid-flow-row gap-3 h-full'>
//       {/* HTML */}
//       <div
//         className='flipper col-span-5 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card flex justify-center items-center'>
//           <div className='flipper-front'>HTML5</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* CSS */}
//       <div
//         className='flipper col-span-2 row-span-2 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>CSS3</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* Bootstrap */}
//       <div
//         className='flipper col-span-3 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>Bootstrap</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* NPM */}
//       <div
//         className='flipper col-span-2 row-span-2 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>NPM</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* Responsive Web Dev */}
//       <div
//         className='flipper col-span-5 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>Responsive Web Dev</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* Tailwind */}
//       <div
//         className='flipper col-span-3 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>Tailwind</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* JavaScript */}
//       <div
//         className='flipper col-span-12 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>JavaScript</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* API */}
//       <div
//         className='flipper col-span-2 row-span-3 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>API</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* JSON */}
//       <div
//         className='flipper col-span-2 row-span-3 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>JSON</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* AJAX */}
//       <div
//         className='flipper col-span-4 row-span-1 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>AJAX</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* PHP */}
//       <div
//         className='flipper col-span-2 row-span-3 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>PHP</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* MYSQL */}
//       <div
//         className='flipper col-span-2 row-span-3 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>MySQL</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* FETCH API */}
//       <div
//         className='flipper col-span-4 row-span-1 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>Fetch API</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* AXIOS */}
//       <div
//         className='flipper col-span-4 row-span-1 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>Axios</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* REACT JS */}
//       <div
//         className='flipper col-span-12 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>React JS</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//       {/* GIT VERSION CONTROL */}
//       <div
//         className='flipper col-span-12 gridCard easeInOut h-full'
//         onMouseDown={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}
//         onMouseUp={(e) => {
//           console.log(e.target.parentElement);
//           var card = e.target.parentElement;
//           card.classList.toggle('flipper-is-flipped');
//         }}>
//         <div className='flipper-card'>
//           <div className='flipper-front'>Git Version Control</div>
//           <div className='flipper-back'>Description</div>
//         </div>
//       </div>
//     </section>
//   </div>
