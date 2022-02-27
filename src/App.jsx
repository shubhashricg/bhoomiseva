import React from 'react';
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';
import Environment from './components/pages/environment/environment';
import Education from './components/pages/education/education';
import Contact from './components/pages/contact/contact';
import GetInvolved from './components/pages/getInvolved/getInvolved';
import About from './components/pages/about/about';
import Donate from './components/pages/donate/donate';
import Orphanage from './components/pages/orphanage/orphanage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/scroll';


function App() {
  return (
    <Router className="App">
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/orphanage-support" element={<Orphanage />} />
      </Routes>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}








export const email = "bhoomiseva.org@gmail.com";
export const phone = "+919900103178";





export default App;
