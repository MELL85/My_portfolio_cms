import React from 'react';

import { About, Experience, Footer, Header, ServSection, Testimonials, Work } from './container';
import { Navbar } from './components';

import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <div className='gradient__bg'> */}
      <div className="App-navbar">
        <Navbar />
      </div>
      <header className="App-header" id="home">
        <Header />
      </header>
      <main>
        <section className='App-about-me'>
          <About />
        </section>
        <section className='App-experience' id="experience">
          <Experience />
        </section>
        <section className='App-serv' id="services">
          <ServSection />
        </section>
        <section className='App-work' id="work">
          <Work />
        </section>
        <section className='App-testimonials' id="testimonials">
          <Testimonials />
        </section>
      </main>
      <footer className="App-footer" id="contact">
        <Footer />
      </footer>
    </div>
    // </div>
  );
}

export default App;
