import React from 'react';
import Header from './Components/Header';
// import Prototype from './Control/Prototype';
import Footer from './Components/Footer';
import Pages from './Control/Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className=' bg-gray-200 relative pb-10 min-h-screen z-0'>
      <Router>
        <div className='z-20'>
          <Header />
        </div>
        <div className='z-0'>
          <Pages />
        </div>
        <div className='z-0'>
          <Footer />
        </div>

        {/* <Prototype /> */}
      </Router>
    </div>
  );
}

export default App;
