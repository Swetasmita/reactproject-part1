import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/randomColor" element={<RandomColor />} />
        
      </Routes>
    </Router>
  );
}

export default App
