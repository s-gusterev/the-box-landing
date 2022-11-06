import React from 'react';
import {
  Header,
  Hero,
  About,
  Consultation,
  Experience,
  Feedback,
  Footer,
  Projects,
  Reputation,
  Services,
} from '..';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <Reputation />
        <About />
        {/* <Services />
        <Experience />
        <Consultation />
        <Projects />
        <Feedback /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default App;
