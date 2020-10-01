import React, { useState } from 'react';
import { flipCard } from '../Control/Interactive';

const Skills = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div className='mt-4 mb-5 mx-20 z-0'>
      <h1 className='text-center text-xl bg-white px-2 py-2 mb-5 shadow-lg'>
        Skills
      </h1>
      <section className='grid grid-cols-12 grid-flow-row gap-4 h-full z-0'>
        {/* HTML */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-5 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card flex justify-center items-center'>
            <div className='flipper-front xl:text-xl'>HTML5</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='pl-2 xl:text-lg font-thin tracking-wide'>
                    HTML5 Crash Course - Understanding Tags
                    <hr />
                    Semantic Elements
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CSS */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 lg:row-span-2 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>CSS3</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    CSS3 Crash Course
                    <hr />
                    Flexbox
                    <hr />
                    Grid
                    <hr />
                    Custom Properties
                    <hr />
                    Animation & Transitions
                    <hr />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bootstrap */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-3 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>Bootstrap</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    Bootstrap Beginner Crash Course
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NPM */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 lg:row-span-2 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>NPM</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    NPM Crash Course
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive Web Dev */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-5 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>
              Responsive Web Layout
            </div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    Media Query
                    <hr />
                    Bootstrap Classes
                    <hr />
                    Tailwind Utility Classes
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tailwind */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-3 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>Tailwind</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    Utility Classes
                    <hr />
                    Creating Custom Utility Classes
                    <hr />
                    Setting Custom Breakpoints
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div
          className='flipper col-span-12 lg:col-span-12 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>JavaScript</div>
            <div className='flipper-back px-5'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2 text-center'>Courses:</h1>
                </li>
                <li className='flex justify-center items-center'>
                  <div className='px-2 text-xs sm:text-sm xl:text-lg font-thin tracking-wide border-r border-white'>
                    Javascript Crash Course For Beginners
                  </div>
                  <div className='px-2 text-xs sm:text-sm xl:text-lg font-thin tracking-wide border-r border-white'>
                    DOM Crash Course - Part 1
                    <hr />
                    DOM Crash Course - Part 2
                    <hr />
                    DOM Crash Course - Part 3
                    <hr />
                    DOM Crash Course - Part 4 - Final Part
                  </div>
                  <div className='px-2 text-xs sm:text-sm xl:text-lg font-thin tracking-wide '>
                    Higher Order Functions & Arrays
                    <hr />
                    OOP Crash Course
                    <hr />
                    Async JS Crash Course - Callbacks, Promises, Async Await
                    <hr />
                    EA6 / ES2015 Tutuorials
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* API */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 lg:row-span-3 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>API</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    JSON Placeholder API
                    <hr />
                    Unsplash API
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JSON */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 lg:row-span-3 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>JSON</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    JavaScript Object Notation
                    <hr />
                    JSON Stringify
                    <hr />
                    JSON Parse
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AJAX */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-4  gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>AJAX</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    AJAX Crash Course (Vinilla JavaScript)
                    <br />
                    GET OR POST:
                    <hr />
                    Local Files Or JSON Files
                    <br />
                    External JSON API
                    <br />
                    External Relational Data Base
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PHP */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 lg:row-span-3 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>PHP</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    XAMPP
                    <hr />
                    Connecting & Querying
                    <br />
                    External DB
                    <br />
                    Result sent to:
                    <br />
                    - AJAX
                    <br />
                    - FetchAPI
                    <br />- Axios
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MYSQL */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 lg:row-span-3 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>MySQL</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    MySQL Crash Course | Learn SQ
                    <hr />
                    CRUD
                    <br />
                    Connecting DB Tables
                    <br />
                    MySQL Functions
                    <br />
                    Time Function
                    <br />
                    Cout Function
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FETCH API */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-4 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>Fetch API</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    Fetch API Introduction
                    <br />
                    GET OR POST:
                    <hr />
                    Local Files Or JSON Files
                    <br />
                    External JSON API
                    <br />
                    External Relational Data Base
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AXIOS */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-4 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>Axios</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    Axios Crash Course
                    <br />
                    GET OR POST:
                    <hr />
                    Local Files Or JSON Files
                    <br />
                    External JSON API
                    <br />
                    External Relational Data Base
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MarkDown */}
        <div
          className='flipper col-span-12 sm:col-span-6 lg:col-span-2 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>Mark Down</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2'>Courses:</h1>
                </li>
                <li>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    MarkDown Crash Course
                    <hr />
                    Code Documentation
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* REACT JS */}
        <div
          className='flipper col-span-12 lg:col-span-10 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>React JS</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2 text-center'>Courses:</h1>
                </li>
                <li className='flex justify-center items-center'>
                  <div className='px-2 text-sm xl:text-xl font-thin tracking-wide border-r border-white'>
                    React JS 2020 Crash Course
                  </div>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide border-r border-white'>
                    Document Structure
                  </div>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    React Hooks
                    <hr />
                    React Router
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* GIT VERSION CONTROL */}
        <div
          className='flipper col-span-12 lg:col-span-12 gridCard easeInOut h-full'
          onClick={(e) => {
            flipCard(e);
            setFlip(true);
          }}
          onMouseOut={(e) => {
            if (flip) {
              console.log(e.target);
              flipCard(e);
              setFlip(false);
            }
          }}>
          <div className='flipper-card'>
            <div className='flipper-front xl:text-xl'>Git Version Control</div>
            <div className='flipper-back'>
              <ul>
                <li>
                  <h1 className='font-bold mb-1 pl-2 text-center'>Courses:</h1>
                </li>
                <li className='flex justify-center items-center'>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide border-r border-white'>
                    Git Crash Course
                    <br />
                    Git & GitHub Connect
                    <br />
                    Git & Visual Studio Code
                  </div>
                  <div className='px-2 text-sm xl:text-lg font-thin tracking-wide'>
                    Cloning repo
                    <hr />
                    Branching
                    <hr />
                    Commiting
                    <hr />
                    Resetting
                    <hr />
                    Pushing
                    <hr />
                    Pulling
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
