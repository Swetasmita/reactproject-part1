import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/randomColor" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRating noOfStars={7} />} />
        <Route
          path="/image-slider"
          element={
            <ImageSlider
              url={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"8"} />
          } />
          <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App
