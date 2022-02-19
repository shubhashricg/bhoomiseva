import React from 'react';
import Home from './components/pages/home/home';
import Environment from './components/pages/environment/environment';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/environment" element={<Environment />} />
      </Routes>
    </Router>
  );
}

export default App;
