import React from 'react';

import { About, Experience, Footer, Greeting, Header, ServSection, Testimonials, Work } from './container';
import { Navbar } from './components';

import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <div className='gradient__bg'> */}
        <header className="App-header">
          <Navbar />
          <Header />
        </header>
        <main>
          {/* <section className='App-greeting'>
            <Greeting />
          </section> */}
          <section className='App-about-me'>
            <About />
          </section>
          <section className='App-experience'>
            <Experience />
          </section>
          <section className='App-serv'>
            <ServSection />
          </section>
          <section className='App-work'>
            <Work />
          </section>
          <section className='App-testimonials'>
            <Testimonials />
          </section>
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    // </div>
  );
}

export default App;
