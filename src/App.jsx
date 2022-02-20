import React from 'react';
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';
import Environment from './components/pages/environment/environment';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/environment" element={<Environment />} />
      </Routes>
      <Footer />
    </Router>
  );
}








export const email = "bhoomiseva.org@gmail.com";
export const phone = "+919900103178";





export default App;
