import React from 'react';

import { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';

import { About, Experience, Footer, Header, ServSection, Testimonials, Work } from './container';
import { Navbar } from './components';

import './App.scss';

function App() {

  // const { t, i18n } = useTranslation();

  return (
    <Suspense fallbackLng="...loading" >
      <div className="App">
        {/* <div className='gradient__bg'> */}
        <div className="App-navbar">
          <Navbar />
        </div>
        <header className="App-header" id="home">
          <Header />
        </header>
        <main>
          <section className='App-about-me' id="about">
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
        {/* </div> */}
      </div>
    </Suspense>
  );
}

export default App;

// export default function WrappedApp() {
//   return (
//     <Suspense fallbackLng="...loading" >
//       <App />
//     </Suspense>
//   )
// }
